import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useShop } from "../context/ShopContaxt";
import { useFetch } from "../hooks/useFetch";
import { Container } from "../style/Cotainer";
import { HomeWrapper } from "../style/Home";
import { Box, BoxImg } from "../style/Product";

export const Product = () => {
    const { add, getQuantity, cartProducts } = useShop();
    const { productId } = useParams();
    const { data, loading } = useFetch(`products/${productId}`);
    console.log(data);

    return (
        <>
            {loading ? (
                <span className="loader"></span>
            ) : (
                <Container>
                    <Box>
                        <BoxImg src="" />
                    </Box>
                </Container>
            )}
        </>
    );
};
