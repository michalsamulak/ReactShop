import styled from "styled-components";
import { ButtonGlobal } from "./Common";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    min-height: 80vh;
    justify-content: space-between;
`

export const CartProduktWrapper = styled.div`
    height: 150px;
//test color

    background-color: aliceblue;
`
// image, price, title, id

export const CartProduct = styled.div`

`



export const CartProductImg = styled.img`
width: 80px;
/* object-fit: contain; */
margin-left: 30px;

`

export const CartProductBtn = styled(ButtonGlobal)`
 width: 150px;
`

export const CartProductQuantity = styled.div`

`

export const CartProductTitle = styled.div`

`

export const CartFooterWrapper = styled.div`
    height: 150px;

    display: flex;
    justify-content: space-between;

`

export const CartFooterBox = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`

export const DiscountInput = styled.input`
    font-weight: lighter;
    font-size: 14px;
    text-align: center;
    letter-spacing: 2px;
    background: none;

    padding: 10px;
    border: 1px solid #80808045;
`
export const CartTitleBox = styled.div`
    display:flex;
    justify-content: space-between;

    font-weight: bold;
    font-size: 16px;
    margin: 10px;
    width: 200px;
`
export const CartFooterTitle = styled.div`

`

export const CartFooterPrice = styled.div`

`

export const CartFooterDisclaimer = styled.div`

`

export const CartCheckoutBtn = styled(ButtonGlobal)`
 width: 150px;
`

export const CartCheckoutPaymants = styled.div`

`

export const PaymantsLogo = styled.img`
    width: 50px;
    padding: 5px;
`