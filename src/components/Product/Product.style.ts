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
border-radius: 1.5rem;
`

export const BoxImg = styled.img`
    width: 30vw;
    border-radius: 1.5rem;
    box-shadow: .5rem .5rem .5rem rgb(37 37 37 / 43%);
`

export const Details = styled.div`
width: 30vw;
padding-left: 3rem;
border-radius: 0px 1.5rem 1.5rem 0px;

`

export const ProductTitle = styled.h2`
    text-transform: uppercase;
    color: rgb(135 46 46);
    color: #fddb3a;
    /* color: #f6f4e6; */
    font-size: 2.4rem;
    padding: .5rem;
    margin-top: .3rem;
`


export const ProductDescr = styled.div`
    /* padding: 1.5rem; */
    
     padding-top: 5rem;
     padding-bottom: 1rem;
     padding: 5rem 2rem 1rem 1rem;
     margin-top: 1rem;
     margin-bottom: 1rem;
     color: rgb(84 10 10);
     color: #fddb3a;
`

export const PriceWrapper = styled.div`
    display: flex;
    margin-top: 25rem;
    align-items: center;
`

export const ProductPrice = styled.span`
    text-transform: uppercase;
    color: #252525;
    font-size: 26px;
    padding: 1.5rem;
    margin-right: 3rem;
    color: #fddb3a;
`

export const ProductRate = styled.div`
      text-transform: uppercase;
    color: #252525;
    font-size: 22px;
    padding: 1.5rem;
    margin-right: 3rem;
    color: #fddb3a;
`