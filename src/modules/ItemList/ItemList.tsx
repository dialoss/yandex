import React from 'react';
import {useGetItemsQuery} from "@/modules/ItemList/api.ts";
import CardList from "@/components/CardList/CardList.tsx";

const ItemList = () => {
    const {data: items, error, isLoading} = useGetItemsQuery();


    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (

        <CardList cards={items}/>
        
    );
};

export default ItemList;