import { Form } from "formik";
import styled from "styled-components";
import { ButtonGlobal } from "./Common";

export const Label = styled.label`
    
`

export const SubmitBtn = styled(ButtonGlobal)`
width: 150px;
margin-left: 50%;
transform: translateX(-50%);
font-size: 24px;

`
export const ContactForm = styled(Form)`
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
font-family: 'Montserrat', Arial, sans-serif;
background: #F2F3EB;

   border: solid 3px #474544;
   max-width: 768px;
   margin: 60px auto;
    position: relative;
    padding: 40px;

 & h1 {
   color: #474544;
   font-size: 32px;
   font-weight: 700;
   letter-spacing: 7px;
   text-align: center;
   text-transform: uppercase;
   margin-bottom: 15px;
 }

 & .underline {
  border-bottom: solid 2px #474544;
  margin: -0.512em auto;
  width: 80px;

}


&  textarea {
 	line-height: 150%;
 	height: 150px;
 	resize: none;
    width: 100%;
 }
`

export const InputWrapper = styled.div`
   padding: 10px;
   margin: 20px 0;


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
	border-bottom: solid 2px #474544;
	color: #474544;
	font-size: 1.000em;
  font-weight: 400;
  letter-spacing: 1px;
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





