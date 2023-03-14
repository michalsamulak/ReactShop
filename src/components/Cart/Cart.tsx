import { CartProduct } from "./CartProduct";
import { Payment } from "./Payment";
import { CartContainer } from "./Cart.style";
import { Helmet } from "react-helmet";

export const Cart = () => {
    return (
        <CartContainer>
               <Helmet title="Cart | React Shop"/>
            <CartProduct />
            <Payment />
        </CartContainer>
    );
};
