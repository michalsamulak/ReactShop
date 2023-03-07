import React from 'react'
import { CartContainer, CartFooterBox, CartFooterWrapper, CartProduktWrapper, DiscountInput } from '../style/Cart.style'

export const Cart = () => {
  return (
    <CartContainer>
        <CartProduktWrapper>text</CartProduktWrapper>
        <CartFooterWrapper>
        <CartFooterBox><DiscountInput placeholder='Promo code'/></CartFooterBox>
        <CartFooterBox>s</CartFooterBox>

        </CartFooterWrapper>
    </CartContainer>
  )
}
