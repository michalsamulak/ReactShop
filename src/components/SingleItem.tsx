import React from "react";
import { useShop } from "../context/ShopContaxt";
import { Button, Card, Description, Picture, Price, Title, Value } from "../style/Home";
import { ISingleProduct } from "../types";

export const SingleItem = ({ product }: { product: ISingleProduct }) => {
    const {image,id, title, description, price } = product;

    const {add, getQuantity, cartProducts} = useShop()


    const handleAdd = (id: number) => {
        add(id)
console.log(cartProducts);
    }

    return (
        <Card >
            <Picture src={image} alt={title}/>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Value>
                <Price>${price}</Price>
                <Button onClick={()=>handleAdd(id)}>Buy</Button>
            </Value>
        </Card>
    );
};
