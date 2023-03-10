import { CartCheckoutBtn, CartFooterBox, CartFooterDisclaimer, CartFooterWrapper, CartTitleBox, DiscountInput, PaymentsLogo } from './Cart.style'
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";
import { useCart } from '../../context/ShopContext';

export const Payment = () => {

    const {getTotalPrice} = useCart()

  return (
    <CartFooterWrapper>
                <CartFooterBox>
                    <DiscountInput placeholder="Promo code" />
                </CartFooterBox>
                <CartFooterBox>
                    <CartTitleBox>
                        <div>Subtotal</div>
                        <div>${getTotalPrice()}</div>
                    </CartTitleBox>
                    <CartFooterDisclaimer>
                        Shipping, taxes and discount calculated at checkout
                    </CartFooterDisclaimer>
                    <CartCheckoutBtn>Checkout</CartCheckoutBtn>
                    <div>
                        <PaymentsLogo src={visa} />
                        <PaymentsLogo src={mastercard} />
                        <PaymentsLogo src={paypal} />
                    </div>
                </CartFooterBox>
            </CartFooterWrapper>
  )
}
