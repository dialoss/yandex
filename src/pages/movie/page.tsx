import React, {useEffect, useState} from 'react';

import {useParams} from "react-router";
import Tile from '@/ui/Tile';
import Carousel from "@/ui/Carousel";
import Container from "@/ui/Container";
import Loader from "@/ui/Loader/Loader";
import RatingInput from "@/ui/Input/RatingInput";
import {getUnique, SERVER_URL, setUserRating} from "@/api";


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
    const [data, setData] = useState<IFilm>({actors: []});
    useEffect(() => {
        getUnique(params.id).then(d => setData(d))
    }, []);

    const info = {
        "Жанр": data.genre,
        "Год выпуска": data.release_year,
        "Рейтинг": data.rating,
        "Режиссёр": "Нет данных",
    };

    if (!data.id) return <Loader/>

    return (
        <Container>
            <Tile className={'mt-4'}>
                <div className={'flex relative'}>
                    <div className={'w-[350px] min-w-[350px] rounded-md overflow-hidden'}>
                        <img src={data.poster} alt="" className={'w-[100%]'}/>
                    </div>
                    <div className={'flex flex-col gap-3 ml-4'}>
                        <h1 className={'font-bold text-3xl'}>{data.title}</h1>
                        <div className={'flex gap-4 justify-start'}>
                            <div className={'flex flex-col gap-3 min-w-[100px]'}>
                                {
                                    Object.entries(info).map(([key, value]) =>
                                        <p className={'font-semibold'}>{key}:</p>
                                    )
                                }
                            </div>
                            <div className={'flex flex-col gap-3'}>
                                {
                                    Object.entries(info).map(([key, value]) =>
                                        <p className={'font-normal'}>{value}</p>
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <p className={'font-semibold'}>Описание</p>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <RatingInput onChange={r => setUserRating(data.id, r)} defaultAmount={+data.rating}/>
                </div>
            </Tile>
            <div className={'mt-4'}>
                <h1 className={'font-bold text-3xl mb-4 ml-4'}>Актёры</h1>
                <Carousel items={[...data.actors, ...data.actors, ...data.actors, ...data.actors]}
                          element={({item: actor}) =>
                              <div className={'flex w-[200px] min-w-[150px] justify-between flex-col gap-4'}>
                                  <img className={'w-[100%] h-[100%] rounded-lg'} src={actor.photo} alt=""/>
                                  <p className={'font-medium text-sm'}>{actor.name}</p>
                              </div>
                          }/>
            </div>
        </Container>
    );
};

export default Page;