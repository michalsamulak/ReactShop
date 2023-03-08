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
    console.log(cartProducts);

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
                                <CartProductText>${price}</CartProductText>
                                <BtnRemove>&#x2715;</BtnRemove>
                            </CartQtyActions>
                        </CartProductBox>
                    </CartProduktWrapper>
                );
            })}
        </>
    );
};
