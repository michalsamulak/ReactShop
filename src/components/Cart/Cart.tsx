import { CartProduct } from "./CartProduct";
import { Payment } from "./Payment";
import { CartContainer } from "./Cart.style";

export const Cart = () => {
    return (
        <CartContainer>
            <CartProduct />
            <Payment />
        </CartContainer>
    );
};
