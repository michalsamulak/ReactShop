import { SingleItem } from "../components/SingleItem";
import { useFetchOnInit } from "../hooks/useFetchOnInit";
import { Error } from "../style/Common";
import { HomeWrapper } from "../style/Home.style";
import { IProductsArray, ISingleProduct } from "../types";
import { apiPaths } from "../utils/utils";

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
                <Error>Sorry, no data retrived...</Error>;
            </HomeWrapper>
        );
    }

    return (
        <HomeWrapper>
            <>
                {data?.map((product: ISingleProduct) => {
                    return <SingleItem key={product.id} product={product} />;
                })}
            </>
        </HomeWrapper>
    );
};
