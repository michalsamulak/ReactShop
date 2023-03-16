import { Form } from "formik";
import styled from "styled-components";
import { ButtonGlobal } from "../../style/Global.style";

export const Label = styled.label`
    
`

export const SubmitBtn = styled(ButtonGlobal)`
width: 15rem;
margin-left: 50%;
transform: translateX(-50%);
font-size: 2.4rem;

`
export const ContactForm = styled(Form)`
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
font-family: 'Montserrat', Arial, sans-serif;
background: #F2F3EB;

   border: solid .3rem #474544;
   max-width: 76.8rem;
   margin: 6rem auto;
    position: relative;
    padding: 4rem;

 & h1 {
   color: #474544;
   font-size: 3.2rem;
   font-weight: 700;
   letter-spacing: .7rem;
   text-align: center;
   text-transform: uppercase;
   margin-bottom: 1.5rem;
 }

 & .underline {
  border-bottom: solid .2rem #474544;
  margin: -0.512em auto;
  width: 8rem;

}


&  textarea {
 	line-height: 150%;
 	height: 15rem;
 	resize: none;
    width: 100%;
 }

 @media only screen and (max-width: 600px) {
  width: 100%;
        padding: 1rem;
        margin: 1rem;
    }
`

export const InputWrapper = styled.div`
   padding: 1rem;
   margin: 2rem 0;


  & .number {
  width: 45%;
}
& .email {
	float: right;
	width: 45%;
}

& input[type='text'], [type='email'], select, textarea {
	background: none;
  border: none;
	border-bottom: solid .2rem #474544;
	color: #474544;
	font-size: 1.000em;
  font-weight: 400;
  letter-spacing: .1rem;
	margin: 0em 0 1.875em 0;
	padding: 0 0 0.875em 0;
  text-transform: uppercase;
	width: 100%;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}
& input[type='text']:focus, [type='email']:focus, textarea:focus {
	outline: none;
	padding: 0 0 0.875em 0;
}
`





