import { CartProduct } from "./CartProduct";
import { Payment } from "./Payment";
import { CartContainer } from "./Cart.style";
// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Cart = () => {
    return (
        <CartContainer>
            <HelmetProvider>
                <Helmet title="Cart | React Shop" />
            </HelmetProvider>
            <CartProduct />
            <Payment />
        </CartContainer>
    );
};
