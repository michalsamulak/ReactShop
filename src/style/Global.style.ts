import styled from "styled-components";


export const Container = styled.div`
    margin: 2rem;
    padding: 1rem;
    margin-left: 10rem;
`
export const Error = styled.div`
color: red;
font-size: 3.6rem;
font-weight: bold;
`

export const ButtonGlobal = styled.button`

display: flex;
flex-direction: column;
align-items: center;
padding: .6rem 1.4rem;
font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
border-radius: .6rem;
border: none;
cursor: pointer;

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