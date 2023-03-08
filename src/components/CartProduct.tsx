import React from 'react'
import { CartProduktWrapper, CartProductBox, CartProductImg, CartProductText, CartProductDescriptions, CartQtyActions, CartProductBtn, CartProductQuantity, BtnRemove } from '../style/Cart.style'

export const CartProduct = () => {
  return (
    <CartProduktWrapper>
                <CartProductBox>
                    <CartProductImg src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                </CartProductBox>
                <CartProductBox>
                    <CartProductText>Title</CartProductText>
                    <CartProductDescriptions>
                        Lorem impsum lorem impsum lorem impsum lorem impsum
                        lorem impsum lorem impsum lorem impsum lorem impsum
                        lorem impsum lorem impsum lorem impsum lorem impsum
                        lorem impsum{" "}
                    </CartProductDescriptions>

                    <CartQtyActions>
                        <CartProductBtn>-</CartProductBtn>
                        <CartProductQuantity>2</CartProductQuantity>
                        <CartProductBtn>+</CartProductBtn>
                        <CartProductText>$55.88</CartProductText>
                        <BtnRemove>&#x2715;</BtnRemove>
                    </CartQtyActions>
                </CartProductBox>
            </CartProduktWrapper>
  )
}
