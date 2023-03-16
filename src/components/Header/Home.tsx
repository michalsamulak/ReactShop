import { SingleItem } from "../Product/SingleItem";
import { useFetchOnInit } from "../../hooks/useFetchOnInit";
import { Error } from "../../style/Global.style";
import { HomeWrapper } from "./Home.style";
import { IProductsArray, ISingleProduct } from "../../types";
import { apiPaths } from "../../utils/utils";
// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';


export const Home = () => {
    const { data, loading, error } = useFetchOnInit<IProductsArray>(
        apiPaths.products
    );

    if (error) {
        return (
            <HomeWrapper>
                <Error>{error.message}</Error>
            </HomeWrapper>
        );
    }

    if (loading) {
        return (
            <HomeWrapper>
                <span className="loader"></span>
            </HomeWrapper>
        );
    }

    if (!loading && data === null) {
        return (
            <HomeWrapper>
                <Error>Sorry, no data retrieved...</Error>;
            </HomeWrapper>
        );
    }

    return (
        <HomeWrapper>
            <>
            <HelmetProvider>

            <Helmet title="Home | React Shop"/>
            </HelmetProvider>
                {data?.map((product: ISingleProduct) => {
                    return <SingleItem key={product.id} product={product} />;
                })}
            </>
        </HomeWrapper>
    );
};
