import { SingleItem } from "../components/SingleItem";
import { useFetch } from "../hooks/useFetch";
import {
    Button,
    Card,
    Description,
    HomeWrapper,
    Price,
    Title,
    Value,
} from "../style/Home.style";
import { IProductsArray, ISingleProduct } from "../types";

export const Home = () => {
    const { data, loading } = useFetch<IProductsArray>("products");

    return (
        <HomeWrapper>
            <>
                {loading ? (
                    <span className="loader"></span>
                ) : (
                    data?.map((product: ISingleProduct) => {
                        return (<SingleItem key={product.id} product={product}/>);
                    })
                )}
            </>
        </HomeWrapper>
    );

  //   return (
  //     <HomeWrapper>
  //         <>
  //             { data?.map((product) => { 
  //                     return (<SingleItem product={product}/>);
  //                 })}
              
  //         </>
  //     </HomeWrapper>
  // );
};
