import {
    BtnRemove,
    CartCheckoutBtn,
    CartContainer,
    CartFooterBox,
    CartFooterDisclaimer,
    CartFooterWrapper,
    CartProductBox,
    CartProductBtn,
    CartProductDescriptions,
    CartProductImg,
    CartProductQuantity,
    CartProductText,
    CartProduktWrapper,
    CartQtyActions,
    CartTitleBox,
    DiscountInput,
    PaymantsLogo,
} from "../style/Cart.style";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";



export const Cart = () => {
    return (
        <CartContainer>
            <CartProduktWrapper>
            <CartProductBox>

                <CartProductImg src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"/> 
            </CartProductBox>
            <CartProductBox>

                <CartProductText>Title</CartProductText>
                <CartProductDescriptions>Lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum </CartProductDescriptions>

                <CartQtyActions>
                <CartProductBtn>-</CartProductBtn>
                <CartProductQuantity>2</CartProductQuantity>
                <CartProductBtn>+</CartProductBtn>
                <CartProductText>$55.88</CartProductText>
                <BtnRemove>&#x2715;</BtnRemove>
                </CartQtyActions>
                    


            </CartProductBox>
            </CartProduktWrapper>
            <CartFooterWrapper>
                <CartFooterBox>
                    <DiscountInput placeholder="Promo code" />
                </CartFooterBox>
                <CartFooterBox>
                    <CartTitleBox>
                        <div>Subtotal</div>
                        <div>$55.55</div>
                    </CartTitleBox>
                    <CartFooterDisclaimer>Shipping, taxes and discount calculated at checkout</CartFooterDisclaimer>
                    <CartCheckoutBtn>Checkout</CartCheckoutBtn>
                    <div>
                        <PaymantsLogo src={visa} />
                        <PaymantsLogo src={mastercard} />
                        <PaymantsLogo src={paypal} />
                    </div>
                </CartFooterBox>
            </CartFooterWrapper>
        </CartContainer>
    );
};
