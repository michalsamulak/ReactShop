import {
    CartCheckoutBtn,
    CartCheckoutPaymants,
    CartContainer,
    CartFooterBox,
    CartFooterPrice,
    CartFooterTitle,
    CartFooterWrapper,
    CartProduktWrapper,
    CartTitleBox,
    DiscountInput,
    PaymantsLogo,
} from "../style/Cart.style";

export const Cart = () => {
    return (
        <CartContainer>
            <CartProduktWrapper>text</CartProduktWrapper>
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
                        <PaymantsLogo src="https://cdn-icons-png.flaticon.com/512/196/196578.png" />
                        <PaymantsLogo src="https://img.icons8.com/color/256/mastercard-logo.png" />

                        <PaymantsLogo src="https://cdn-icons-png.flaticon.com/512/196/196565.png" />
                    </CartCheckoutPaymants>
                </CartFooterBox>
            </CartFooterWrapper>
        </CartContainer>
    );
};
