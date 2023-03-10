import { Field, Formik } from 'formik';
import { ContactForm, InputWrapper, Label, SubmitBtn } from './Contact.style';
import { schema } from "../../utils/validation";

export const Contact = () => {

  const initialValues = {
    name: "",
    surname: "",
    email: "",
    number: "",
    message: ""
};



  return (
    <Formik
    initialValues={initialValues}

    validator={schema}

    onSubmit={()=>{}}
> 
    {() => (
        <ContactForm className="form">
          <h1>&bull; Keep in Touch &bull;</h1>
          <div className="underline"></div>
            <InputWrapper >
                <Label htmlFor={"name"} >
                    Name:
                </Label>
                <Field as="input" type='text' id={"name"} name={"name"} className='field'></Field>
            </InputWrapper>

            <InputWrapper >
                <Label htmlFor={"surname"} >
                Surname:
                </Label>
                <Field as="input" type='text' id={"surname"} name={"surname"} className='field'></Field>
            </InputWrapper>

            <InputWrapper >
                <Label htmlFor={"email"} >
                E-mail:
                </Label>
                <Field as="input" type="email" id={"email"} name={"email"} className='email'></Field>
            </InputWrapper>
            <InputWrapper >
                <Label htmlFor={"number"} >
                    Contact number:
                </Label>
                <Field as="input" type='text' id={"number"} name={"number"} className='number'></Field>
            </InputWrapper>
            <InputWrapper >
                <Label htmlFor={"message"} >
                Message: 
                </Label>
                <Field as="textarea"  id={"message"} name={"message"} className='field'></Field>
            </InputWrapper>
            
            <SubmitBtn type="submit">
                Submit
            </SubmitBtn>
        </ContactForm>
    )}
</Formik>
  )
}
