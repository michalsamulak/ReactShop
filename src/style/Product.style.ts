import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 60vw;
    background-color: rgba(87, 131, 255, 1);
background-image: linear-gradient(142deg, rgba(87, 131, 255, 1) 34%, rgba(83, 111, 200, 1) 62%);
margin-left: 50%;
transform: translateX(-30vw);
border-radius: 15px;
`

export const BoxImg = styled.img`
    width: 30vw;
    border-radius: 15px;
    box-shadow: 5px 5px 5px rgb(37 37 37 / 43%);
`

export const Details = styled.div`
width: 30vw;
padding-left: 30px;
border-radius: 0px 15px 15px 0px;

`

export const ProductTitle = styled.h2`
    text-transform: uppercase;
    color: rgb(135 46 46);
    color: #fddb3a;
    /* color: #f6f4e6; */
    font-size: 24px;
    padding: 5px;
    margin-top: 3px;
`


export const ProductDescr = styled.div`
    /* padding: 15px; */
    
     padding-top: 50px;
     padding-bottom: 10px;
     padding: 50px 20px 10px 10px;
     margin-top: 10px;
     margin-bottom: 10px;
     color: rgb(84 10 10);
     color: #fddb3a;
`

export const PriceWrapper = styled.div`
    display: flex;
    margin-top: 250px;
    align-items: center;
`

export const ProductPrice = styled.span`
    text-transform: uppercase;
    color: #252525;
    font-size: 26px;
    padding: 15px;
    margin-right: 30px;
    color: #fddb3a;
`

export const ProductRate = styled.div`
      text-transform: uppercase;
    color: #252525;
    font-size: 22px;
    padding: 15px;
    margin-right: 30px;
    color: #fddb3a;
`