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
    const { cartProducts, add, decrice, remove } = useCart();


    if(cartProducts.length === 0) return (<CartProduktWrapper>You're Cart is empty</CartProduktWrapper>)

    
    
    return (
        <>
            {cartProducts.map((product) => {
                const { id, image, title, quantity, price, description } =
                product;
                const inc = {id, price, title, image, description}
             
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
                                <CartProductBtn onClick={() => decrice(id)}>-</CartProductBtn>
                                <CartProductQuantity>
                                    {quantity}
                                </CartProductQuantity>
                                <CartProductBtn onClick={()=>add(inc)}>+</CartProductBtn>
                                <CartProductText>${price * quantity}</CartProductText>
                                <BtnRemove onClick={()=>remove(id)}>&#x2715;</BtnRemove>
                            </CartQtyActions>
                        </CartProductBox>
                    </CartProduktWrapper>
                );
            })}
        </>
    );
};
