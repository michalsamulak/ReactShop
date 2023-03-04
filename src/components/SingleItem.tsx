import React from "react";
import { Button, Card, Description, Price, Title, Value } from "../style/Home";
import { ISingleProduct } from "../types";

export const SingleItem = ({ product }: { product: ISingleProduct }) => {
    const {id, title, description, price } = product;
    console.log(product);
    return (
        <Card >
            {/* <img src="" alt="" /> */}
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Value>
                <Price>${price}</Price>
                <Button>Buy</Button>
            </Value>
        </Card>
    );
};
