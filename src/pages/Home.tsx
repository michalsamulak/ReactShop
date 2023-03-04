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
} from "../style/Home";

export const Home = () => {
    const { data, loading } = useFetch("products");

    return (
        <HomeWrapper>
            <>
                {loading ? (
                    <span className="loader"></span>
                ) : (
                    data?.map((product) => {
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
