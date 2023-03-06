import { useParams } from "react-router-dom";
import { useShop } from "../context/ShopContaxt";
import { useFetchOnInit } from "../hooks/useFetchOnInit";
import { Container, Error } from "../style/Common";
import { Box, BoxImg, Details, PriceWrapper, ProductDescr, ProductPrice, ProductRate, ProductTitle } from "../style/Product.style";
import { ISingleProduct } from "../types";
import { apiPaths } from "../utils/utils";


export const Product = () => {
    // const { add, getQuantity, cartProducts } = useShop();
    const { productId } = useParams();
    const { data, loading, error } = useFetchOnInit<ISingleProduct>(`${apiPaths.products}/${productId}`); 

    if (error) {
        return (
            <Box>
                <Error>{error.message}</Error>
            </Box>
        );
    }

    return (
        <>
            {data === null || loading ? (
                <span className="loader"></span>
            ) : (
                <Container>
                    <Box>
                        <BoxImg src={data.image} />
                        <Details>
                          <ProductTitle>{data.title}</ProductTitle>
                          <ProductDescr>{data.description}</ProductDescr>
                          <PriceWrapper>
                            <ProductPrice>${data.price}</ProductPrice>
                            <ProductRate>&#11088;{data.rating.rate}/5</ProductRate>
                            <ProductRate>&#129489;{data.rating.count}</ProductRate>
                          </PriceWrapper>
                        </Details>
                    </Box>
                </Container>
            )}
        </>
    );
};
