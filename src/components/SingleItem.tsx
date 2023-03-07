import { Link } from "react-router-dom";
import { IItemToAdd, useCart } from "../context/ShopContaxt";
import {
    Button,
    Card,
    Description,
    Picture,
    Price,
    Title,
    Value,
} from "../style/Home.style";
import { ISingleProduct } from "../types";

export const SingleItem = ({ product }: { product: ISingleProduct }) => {
    const { image, id, title, description, price } = product;

    const { add } = useCart();

        const handleAddToBasket = ({id, price, title, image} : IItemToAdd) => {

        const itemToAdd = {id, price, title, image}

        add(itemToAdd); 
    };

    return (
        <Card>
            <Link to={`/product/${id}`}>
                <Picture src={image} alt={title} />
            </Link>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Value>
                <Price>${price}</Price>
                <Button onClick={() => handleAddToBasket({id, price, title, image})}>Buy</Button>
            </Value>
        </Card>
    );
};
