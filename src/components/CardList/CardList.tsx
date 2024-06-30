import React from 'react';
import Card, {ICard} from "@/ui/Card/Card";
import NavButton from '@/ui/NavButton';

interface ICardList {
    cards: ICard[]
    pages: number;
    page: number;
    setPage: (page: number) => object[]
    isEmpty: boolean
}

const CardList = ({cards, pages, page, setPage, isEmpty}: ICardList) => {
    return (
        <>
            <div className={'flex flex-col gap-4 min-h-[70vh]'}>
                {!isEmpty ?
                    cards.map(card => <Card {...card}/>) : <div className={'text-center mt-[200px] flex flex-col gap-2'}>
                        <h1 className={'font-bold text-2xl'}>Фильмы не найдены</h1>
                        <p>Измените запрос и попробуйте снова</p>
                </div>
                }
            </div>
            {pages > 1 && <div className={'flex gap-2 items-center mt-4'}>
                <NavButton disabled={page <= 1 || page >= pages} callback={() => setPage(page - 1)} side={'left'}/>
                <div>{page}</div>
                <NavButton disabled={page >= pages} callback={() => setPage(page + 1)} side={'right'}/>
            </div>}
        </>
    );
};

export default CardList;