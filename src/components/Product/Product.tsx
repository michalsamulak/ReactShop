import { useParams } from "react-router-dom";
import { useFetchOnInit } from "../../hooks/useFetchOnInit";
import { Container, Error } from "../../style/Global.style";
import { Box, BoxImg, Details, PriceWrapper, ProductDescr, ProductPrice, ProductRate, ProductTitle } from "./Product.style";
import { ISingleProduct } from "../../types";
import { apiPaths } from "../../utils/utils";
import { Button } from "../Header/Home.style";
import { useCart } from "../../context/ShopContext";
import { Toaster } from "react-hot-toast";
import { notify } from "../../utils/utils";
// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';
export const Product = () => {
    const { productId } = useParams();
    const { data, loading, error } = useFetchOnInit<ISingleProduct>(`${apiPaths.products}/${productId}`); 

    const { add } = useCart();

 
    
    const handleAddToBasket = (id: number, price: number, title: string, image: string, description: string ) => {
        const itemToAdd = { id, price, title, image, description };

        add(itemToAdd);
        notify()
    };

    if (error) {
        return (
            <Box>
                <Error>{error.message}</Error>
            </Box>
        );
    }

    return (
        <>
        <HelmetProvider>

           <Helmet title="Product card | React Shop"/>
        </HelmetProvider>
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
                            <Button onClick={() => handleAddToBasket(data.id, data.price, data.title, data.image, data.description)}>Buy</Button>
                            <Toaster/>
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
