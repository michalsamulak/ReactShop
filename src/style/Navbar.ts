import styled from "styled-components";


export const Navbar = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
    background: #272727;
    font-family: "Montserrat", sans-serif;
    
    
    display: flex;
    justify-content: space-around;
    align-items: center;
  
  /* text-decoration: none; */
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 500;
  width: 100vw;
  height: 80px;


  & a:hover {
    color: #fddb3a;
  }

  & a {
    color: #f6f4e6;
  }
`