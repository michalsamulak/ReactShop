import { CartProduct } from "../components/CartProduct";
import { Paymant } from "../components/Paymant";
import { CartContainer } from "../style/Cart.style";

export const Cart = () => {
    return (
        <CartContainer>
            <CartProduct />
            <Paymant />
        </CartContainer>
    );
};
