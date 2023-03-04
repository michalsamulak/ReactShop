
import { SingleItem } from '../components/SingleItem';
import { useFetch } from '../hooks/useFetch';
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
    const {data, loading} = useFetch('products')

    if(!data) throw new Error('Try again...')

    const renderProduts = () => {
      data.map(product=> {
        
      })
    }
  

    return (
        <HomeWrapper>
          {!loading ? <SingleItem/> : <span className="loader"></span>}
        </HomeWrapper>
    );
};
