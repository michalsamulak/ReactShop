import axios from "axios";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useShop } from "../context/ShopContaxt";
import { useFetch } from "../hooks/useFetch";
import { Container } from "../style/Cotainer";
import { HomeWrapper } from "../style/Home";
import { Box, BoxImg, Details } from "../style/Product";
import { ISingleProduct } from "../types";

export const Product = () => {
    const { add, getQuantity, cartProducts } = useShop();
    const { productId } = useParams();
    const { data, loading } = useFetch<ISingleProduct>(`products/${productId}`);


    return (
        <>
            {data === null || loading ? (
                <span className="loader"></span>
            ) : (
                <Container>
                    <Box>
                        <BoxImg src={data.image} />
                        <Details>
                          d
                        </Details>
                    </Box>
                </Container>
            )}
        </>
    );
};
