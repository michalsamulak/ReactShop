import { useCart } from "../context/ShopContext";
import {
    CartProductWrapper,
    CartProductBox,
    CartProductImg,
    CartProductText,
    CartProductDescriptions,
    CartQtyActions,
    CartProductBtn,
    CartProductQuantity,
    BtnRemove,
} from "../style/Cart.style";

// CartProduct
    // index.tsx
    // styles.ts



export const CartProduct = () => {
    const { cartProducts, add, decrease, remove } = useCart();


    if(cartProducts.length === 0) return (<CartProductWrapper>You're Cart is empty</CartProductWrapper>)

    
    
    return (
        <>
            {cartProducts.map((product) => {
                const { id, image, title, quantity, price, description } =
                product;
                const inc = {id, price, title, image, description}
             
                return (
                    <CartProductWrapper key={id}>
                        <CartProductBox>
                            <CartProductImg src={image} />
                        </CartProductBox>
                        <CartProductBox>
                            <CartProductText>{title}</CartProductText>
                            <CartProductDescriptions> 
                                {description}
                            </CartProductDescriptions>

                            <CartQtyActions>
                                <CartProductBtn onClick={() => decrease(id)}>-</CartProductBtn>
                                <CartProductQuantity>
                                    {quantity}
                                </CartProductQuantity>
                                <CartProductBtn onClick={()=>add(inc)}>+</CartProductBtn>
                                <CartProductText>${price * quantity}</CartProductText>
                                <BtnRemove onClick={()=>remove(id)}>&#x2715;</BtnRemove>
                            </CartQtyActions>
                        </CartProductBox>
                    </CartProductWrapper>
                );
            })}
        </>
    );
};
