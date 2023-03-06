import { SingleItem } from "../components/SingleItem";
import { useFetch } from "../hooks/useFetch";
import { HomeWrapper } from "../style/Home.style";
import { IProductsArray, ISingleProduct } from "../types";

// utils.ts
// const apiPaths = { products: '/products' }

export const Home = () => {
    const { data, loading } = useFetch<IProductsArray>("products"); // apiPaths.products

    if (loading) {
        return  <HomeWrapper><span className="loader"></span></HomeWrapper>
    }

    if (!loading && data === null) {
        return  <HomeWrapper><p>Error</p></HomeWrapper>
    }

    return (
        <HomeWrapper>
            <>
                {data?.map((product: ISingleProduct) => {
                        return (
                            <SingleItem key={product.id} product={product} />
                        );
                    })}
            </>
        </HomeWrapper>
    );
};
