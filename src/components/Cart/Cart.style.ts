import styled from "styled-components";
import { ButtonGlobal } from "../../style/Global.style";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    min-height: 80vh;
    justify-content: space-between;
    color: #252525;

    @media only screen and (max-width: 600px) {
        padding: 5px;
        width: 100%;
    }
    `

export const CartProductWrapper = styled.div`
    padding: 1.5rem;
    background-color: rgb(173 173 173);
    display: flex;
    align-items: center;
    border-radius: .5rem;
    margin-bottom: .1rem;
    
    @media only screen and (max-width: 600px) {
        padding: 1rem;
        margin-bottom: .5rem;
        
    }

`

export const CartProductBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    margin-left: 1.5rem;
    margin-right: 3rem;


`



export const CartProductImg = styled.img`
    width: 8rem;
    margin-left: 1.5rem;
    border-radius: .5rem;

    
`

export const CartProductBtn = styled(ButtonGlobal)`
    width: 3rem;
`

export const CartProductQuantity = styled.div`
    margin: 1rem;
    font-size: 2rem;
`

export const CartProductText = styled.div`
    font-weight: bold;
    font-size: 1.8rem;
    margin-left: 2rem;
`
export const CartProductDescriptions = styled.div`
    width: 40vw;
    margin-top: 1rem;
    color: rgb(37 37 37 / 78%);

    @media only screen and (max-width: 600px) {
      width: auto;

    }
`


export const CartQtyActions = styled.div`
    display: flex;
    width: 15rem;
    align-items: center;
    margin: 1.5rem;
    justify-content: space-around;
    align-self: end;

    @media only screen and (max-width: 600px) {
        align-self: start;
        margin-top: 0;
        margin-bottom: 0;
    }
`
export const BtnRemove = styled.div`
    color: red;
    font-weight: bold;
    margin-left: 1rem;
    margin-top: -.4rem;
    text-align: center;
    font-size: 2rem;
    cursor: pointer;
`
export const CartFooterWrapper = styled.div`
    height: 15rem;
    display: flex;
    justify-content: space-between;
`

export const CartFooterBox = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const DiscountInput = styled.input`
    font-weight: lighter;
    font-size: 1.4rem;
    text-align: center;
    letter-spacing: .2rem;
    background: none;
    padding: 1rem;
    border: .1rem solid #80808045;
`
export const CartTitleBox = styled.div`
    display:flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.6rem;
    margin: 1rem;
    width: 20rem;
`


export const CartFooterDisclaimer = styled.div`
    font-size: 1.6rem;
    text-align: center;
    color: #252525;
    background: none;
    padding: 1rem;
`

export const CartCheckoutBtn = styled(ButtonGlobal)`
 width: 15rem;
`


export const PaymentsLogo = styled.img`
    width: 5rem;
    padding: .5rem;
`