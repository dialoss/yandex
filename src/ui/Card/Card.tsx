import React from 'react';
import Rating from "@/ui/Card/Rating";
import Tile from "@/ui/Tile";
import {Link} from "react-router-dom";


export interface ICard {
    id: number;
    title: string
    poster: string
    rating: number
    genre: string;
    description: string
    release_year: number;
}

const Card = ({title, poster, rating, genre, description, id, release_year}: ICard) => {
    const info = {"Жанр": genre, "Год выпуска": release_year, "Описание": description.substring(0, 300)};
    return (
        <Tile className={'w-[100%] block '}>
            <Link to={"/movie/" + id}>
                <div className={'flex'}>
                    <div className={'rounded-[8px] overflow-hidden min-w-[100px] w-[100px] h-[100%]'}>
                        <img src={poster} alt="" className={'w-[100%]'}/>
                    </div>
                    <div className={'flex flex-col gap-3 ml-4'}>
                        <h1 className={'font-bold text-2xl'}>{title}</h1>
                        <div className={'flex gap-4 justify-start'}>
                            <div className={'flex flex-col gap-3 min-w-[100px]'}>
                                {
                                    Object.entries(info).map(([key, value]) =>
                                        <p className={'font-normal text-sm'}>{key}</p>
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
                    </div>
                    <Rating amount={rating}/>
                </div>
            </Link>
        </Tile>
    );
};

export default Card;