import React, {useEffect, useState} from 'react';
import Rating from '@/ui/Card/Rating';
import {useParams} from "react-router";
import Tile from '@/ui/Tile';


type Actor = {
    name: string;
    photo: string;
}

interface IFilm {
    title: string
    poster: string
    rating: number
    release_year: number;
    description: string;
    total_rates_count: number;
    id: number;
    genre: string;
    actors: Actor[];
}


const Page = () => {
    const params = useParams();
    const [data, setData] = useState<IFilm>({});
    useEffect(() => {
        fetch("http://localhost:3030/api/v1/movie/" + params.id).then(r => r.json()).then(d => setData(d))
    }, []);

    const info = {
        "Жанр": data.genre,
        "Год выпуска": data.release_year,
        "Рейтинг": data.rating,
        "Режиссёр": "Нет данных",
    };

    return (
        <div>
            <Tile>
                <div className={'flex relative'}>
                    <div className={'w-[200px]'}>
                        <img src={data.poster} alt="" className={'w-[100%]'}/>
                    </div>
                    <div className={'flex flex-col gap-3 ml-4'}>
                        <h1 className={'font-bold text-2xl'}>{data.title}</h1>
                        <div className={'flex gap-4 justify-start'}>
                            <div className={'flex flex-col gap-3 min-w-[100px]'}>
                                {
                                    Object.entries(info).map(([key, value]) =>
                                        <p className={'font-normal text-sm'}>{key}:</p>
                                    )
                                }
                            </div>
                            <div className={'flex flex-col gap-3'}>
                                {
                                    Object.entries(info).map(([key, value]) =>
                                        <p className={'font-semibold'}>{value}</p>
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <p className={'font-normal text-sm'}>Описание</p>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <Rating amount={data.rating}/>
                </div>
            </Tile>

        </div>
    );
};

export default Page;