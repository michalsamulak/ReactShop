import styled from "styled-components";
import { ButtonGlobal } from "./Common";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    min-height: 80vh;
    justify-content: space-between;
    color: #252525;
`

export const CartProductWrapper = styled.div`
    padding: 15px;
    background-color: #dddbdb;;
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 1px;

`

export const CartProductBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    margin-left: 15px;
    margin-right: 30px;
`



export const CartProductImg = styled.img`
    width: 80px;
    margin-left: 15px;
    border-radius: 5px;
`

export const CartProductBtn = styled(ButtonGlobal)`
    width: 30px;
`

export const CartProductQuantity = styled.div`
    margin: 10px;
    font-size: 20px;
`

export const CartProductText = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-left: 20px;
`
export const CartProductDescriptions = styled.div`
    width: 40vw;
    margin-top: 10px;
    color: rgb(37 37 37 / 78%);
`


export const CartQtyActions = styled.div`
    display: flex;
    width: 150px;
    align-items: center;
    margin: 15px;
    justify-content: space-around;
    align-self: end;
`
export const BtnRemove = styled.div`
    color: red;
    font-weight: bold;
    margin-left: 10px;
    margin-top: -4px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
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


export const CartFooterDisclaimer = styled.div`
    font-size: 10px;
    text-align: center;
    color: rgb(128 128 128 / 71%);;
    background: none;
    padding: 10px;
`

export const CartCheckoutBtn = styled(ButtonGlobal)`
 width: 150px;
`


export const PaymentsLogo = styled.img`
    width: 50px;
    padding: 5px;
`