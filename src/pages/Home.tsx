import { SingleItem } from "../components/SingleItem";
import { useFetchOnInit } from "../hooks/useFetchOnInit";
import { HomeWrapper } from "../style/Home.style";
import { IProductsArray, ISingleProduct } from "../types";
import { apiPaths } from "../utils/utils";


export const Home = () => {
    const { data, loading } = useFetchOnInit<IProductsArray>(apiPaths.products); 

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
