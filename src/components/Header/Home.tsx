import { SingleItem } from "../Product/SingleItem";
import { useFetchOnInit } from "../../hooks/useFetchOnInit";
import { Error } from "../../style/Global.style";
import { HomeWrapper } from "./Home.style";
import { IProductsArray, ISingleProduct } from "../../types";
import { apiPaths } from "../../utils/utils";
import { Helmet } from "react-helmet";



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
            <Helmet title="Home | React Shop"/>
                {data?.map((product: ISingleProduct) => {
                    return <SingleItem key={product.id} product={product} />;
                })}
            </>
        </HomeWrapper>
    );
};
