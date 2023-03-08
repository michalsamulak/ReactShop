import React from 'react'
import { CartCheckoutBtn, CartFooterBox, CartFooterDisclaimer, CartFooterWrapper, CartTitleBox, DiscountInput, PaymantsLogo } from '../style/Cart.style'
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";
import { useCart } from '../context/ShopContaxt';

export const Paymant = () => {

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
                        <PaymantsLogo src={visa} />
                        <PaymantsLogo src={mastercard} />
                        <PaymantsLogo src={paypal} />
                    </div>
                </CartFooterBox>
            </CartFooterWrapper>
  )
}
