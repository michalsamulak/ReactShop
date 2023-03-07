import styled from "styled-components";

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

export const CartCheckoutBtn = styled.button`

width: 150px;
display: flex;
flex-direction: column;
align-items: center;
padding: 6px 14px;
font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
border-radius: 6px;
border: none;

color: #fff;
background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%);
 background-origin: border-box;
box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;

&:focus {
box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
outline: 0;
}

`

export const CartCheckoutPaymants = styled.div`

`

export const PaymantsLogo = styled.img`
    width: 50px;
    padding: 5px;
`