import {
    CartCheckoutBtn,
    CartCheckoutPaymants,
    CartContainer,
    CartFooterBox,
    CartFooterPrice,
    CartFooterTitle,
    CartFooterWrapper,
    CartProduct,
    CartProductImg,
    CartProductQuantity,
    CartProductTitle,
    CartProduktWrapper,
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
                <CartProductImg src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"/> <CartProductQuantity></CartProductQuantity> <CartProductTitle></CartProductTitle>
            </CartProduktWrapper>
            <CartFooterWrapper>
                <CartFooterBox>
                    <DiscountInput placeholder="Promo code" />
                </CartFooterBox>
                <CartFooterBox>
                    <CartTitleBox>
                        <CartFooterTitle>Subtotal</CartFooterTitle>
                        <CartFooterPrice>$55.55</CartFooterPrice>
                    </CartTitleBox>

                    <CartCheckoutBtn>Checkout</CartCheckoutBtn>
                    <CartCheckoutPaymants>
                        <PaymantsLogo src={visa} />
                        <PaymantsLogo src={mastercard} />
                        <PaymantsLogo src={paypal} />
                    </CartCheckoutPaymants>
                </CartFooterBox>
            </CartFooterWrapper>
        </CartContainer>
    );
};
