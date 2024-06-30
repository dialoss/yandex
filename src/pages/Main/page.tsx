import React, {useLayoutEffect, useState} from 'react';
import Tile from "@/ui/Tile";
import SearchInput from "@/ui/Input/SearchInput";
import SelectInput from "@/ui/Input/SelectInput";
import CardList from '@/components/CardList/CardList';
import Loader from "@/ui/Loader/Loader";
import {SERVER_URL} from "@/api";
import {Simulate} from "react-dom/test-utils";
import {GENRES, YEARS} from "@/pages/Main/config";


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

function getFilters(): IFilters {
    const init = {title: "", genre: "", year: "", page: 1};
    let filters = {};
    let params = new URL(window.location.href).searchParams;
    for (const key in init) {
        if (params.get(key)) filters[key] = params.get(key)
    }
    return filters
}

const Page = () => {
    const [cards, setCards] = React.useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    function handleFilter(name: string, value: string) {
        let p = {};
        if (name !== 'page') p = {page: 1}
        setFilters({...filters, [name]: value, ...p});
    }

    const [filters, setFilters] = useState<IFilters>(() => getFilters());

    useLayoutEffect(() => {
        debounce(() => {
            let url = SERVER_URL + "/api/v1/search"
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
                    <SelectInput onChange={v => handleFilter("genre", v)} defaultValue={filters.genre} label={'Жанр'}
                                 placeholder={'Выберите жанр'}
                                 data={GENRES}/>
                    <SelectInput onChange={v => handleFilter("release_year", v)} defaultValue={filters.year}
                                 label={'Год выпуска'}
                                 placeholder={'Выберите год'} data={YEARS}/>
                </div>
            </Tile>
            <div className={'ml-4 flex-grow relative'}>
                <SearchInput className={'w-[300px]'} defaultValue={filters.title}
                             onChange={v => handleFilter("title", v)}
                             placeholder={'Название фильма'}/>
                <div className={'h-[20px]'}></div>
                <CardList isEmpty={total === 0 && !loading}
                          page={+filters.page}
                          cards={cards}
                          pages={total}
                          setPage={v => handleFilter("page", v)}/>
                {loading && <Loader/>}
            </div>
        </div>
    );
};

export default Page;