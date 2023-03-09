import { CartProduct } from "../components/CartProduct";
import { Payment } from "../components/Payment";
import { CartContainer } from "../style/Cart.style";

export const Cart = () => {
    return (
        <CartContainer>
            <CartProduct />
            <Payment />
        </CartContainer>
    );
};
