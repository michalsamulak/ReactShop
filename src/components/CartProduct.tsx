import { useCart } from "../context/ShopContaxt";
import {
    CartProduktWrapper,
    CartProductBox,
    CartProductImg,
    CartProductText,
    CartProductDescriptions,
    CartQtyActions,
    CartProductBtn,
    CartProductQuantity,
    BtnRemove,
} from "../style/Cart.style";

export const CartProduct = () => {
    const { cartProducts } = useCart();


    if(cartProducts.length === 0) return (<CartProduktWrapper>You're Cart is empty</CartProduktWrapper>)

    return (
        <>
            {cartProducts.map((product) => {
                const { id, image, title, quantity, price, description } =
                    product;

                return (
                    <CartProduktWrapper key={id}>
                        <CartProductBox>
                            <CartProductImg src={image} />
                        </CartProductBox>
                        <CartProductBox>
                            <CartProductText>{title}</CartProductText>
                            <CartProductDescriptions>
                                {description}
                            </CartProductDescriptions>

                            <CartQtyActions>
                                <CartProductBtn>-</CartProductBtn>
                                <CartProductQuantity>
                                    {quantity}
                                </CartProductQuantity>
                                <CartProductBtn>+</CartProductBtn>
                                <CartProductText>${price * quantity}</CartProductText>
                                <BtnRemove>&#x2715;</BtnRemove>
                            </CartQtyActions>
                        </CartProductBox>
                    </CartProduktWrapper>
                );
            })}
        </>
    );
};
