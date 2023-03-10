import styled from "styled-components";


export const HomeWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    
`

export const Card = styled.div`

    background-color: rgba(89, 131, 252, 1);
    background-image: linear-gradient(358deg, rgba(89, 131, 252, 1) 0%, rgba(255, 255, 255, 1) 41%);


    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 5px;


    width: 250px;
    height: 500px;
    margin: 15px;

    box-shadow: 10px 10px 10px #252525;
`

export const Title = styled.h5`
    text-transform: uppercase;
    color: #252525;
    font-size: 16px;
    padding: 5px;
    border-bottom: 1px solid #252525;
`

export const Description = styled.span`
    padding: 15px;
    overflow: hidden;
     text-overflow: ellipsis;
     padding-top: 10px;
     padding-bottom: 10px;
     margin-top: 10px;
     margin-bottom: 10px;
`

export const Value = styled.div`
    border-top: 1px solid #252525;
    display: flex;

    align-items: center;
`

export const Price = styled.span`
    text-transform: uppercase;
    color: #252525;
    font-size: 26px;
    padding: 15px;
    margin-right: 30px;
`

export const Button = styled.button`

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

export const Picture = styled.img`
        width: 90%;
        min-height: 200px;
    max-height: 300px;
    margin: 5px;
`