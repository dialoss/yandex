import React, {useLayoutEffect, useState} from 'react';
import Tile from "@/ui/Tile";
import SearchInput from "@/ui/Input/SearchInput";
import SelectInput from "@/ui/Input/SelectInput";
import CardList from '@/components/CardList/CardList';


const GENRES = {
    '0': 'Не выбран',
    comedy: 'Комедия',
    drama: 'Драма',
    action: 'Боевик',
    thriller: 'Триллер',
    horror: 'Ужасы',
    family: 'Семейный',
    cartoon: 'Анимированный',
    fantasy: 'Фэнтези',
    romance: 'Романтика',
    adventure: 'Приключения',
    musical: 'Мьюзикл',
    war: 'Военный',
}

const YEARS = {
    '0': 'Не выбран',
    '2009': '2009',
    '2008': '2008',
    '2007': '2007',
    '2006': '2006',
    '1990-2005': '1990-2005',
    '1950-1989': '1950-1989',
}

function debounce(func) {
    let timeout = null;
    return function () {
        if (timeout) clearTimeout(timeout);
        else timeout = setTimeout(() => {
            func();
            timeout = null;
        }, 300);
    }
}

type IFilters = {
    genre: string;
    year: string;
    page: number;
    title: string;
}

function applyFilter(url, name, value) {
    let state = new URL(window.location.href);
    if (!value) state.searchParams.delete(name);
    else state.searchParams.set(name, value);
    window.history.pushState({}, "", state.toString());

    if (!value) return url;
    const u = new URL(url);
    u.searchParams.set(name, value);
    return u.toString();
}

const Page = () => {
    const [cards, setCards] = React.useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    function handleFilter(name: string, value: string) {
        setFilters({...filters, [name]: value});
    }

    const [filters, setFilters] = useState<IFilters>({title: "", genre: "", year: "", page: 1});

    useLayoutEffect(() => {
        debounce(() => {
            let url = "http://localhost:3030/api/v1/search"
            Object.entries(filters).map(([key, value]) => url = applyFilter(url, key, value));

            setLoading(true);
            fetch(url).then(r => r.json()).then(d => {
                setCards(d.search_result);
                setTotal(d.total_pages);
                setLoading(false)
            });
        })();
    }, [filters]);

    return (
        <div className={'p-4 flex'}>
            <Tile className={'self-start'}>
                <div className={'flex flex-col gap-2 '}>
                    <h1 className={'font-bold'}>Фильтр</h1>
                    <SelectInput onChange={v => handleFilter("genre", v)} label={'Жанр'} placeholder={'Выберите жанр'} data={GENRES}/>
                    <SelectInput onChange={v => handleFilter("year", v)} label={'Год выпуска'} placeholder={'Выберите год'} data={YEARS}/>
                </div>
            </Tile>
            <div className={'ml-4 flex-grow relative'}>
                <SearchInput className={'w-[300px]'} onChange={v => handleFilter("title", v)} placeholder={'Название фильма'}/>
                <div className={'h-[20px]'}></div>
                <CardList cards={cards} pages={total} getPage={v => handleFilter("page", v)}/>
                {/*<ClipLoader className={'top-[50vh] left-[50%]'} size={80} loading={loading} color={"#fff"}/>*/}
            </div>
        </div>
    );
};

export default Page;