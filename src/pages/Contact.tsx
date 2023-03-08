import { Field, FieldProps, Form, Formik } from 'formik';
import { Label, SubmitBtn } from '../style/Contact.style';
import { schema } from "../utils/validation";

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
        <Form className="form">
            <div className="input">
                <Label htmlFor={"name"} >
                    Name:
                </Label>
                <Field as="input" id={"name"} name={"name"} className='field'></Field>
            </div>

            <div className="input">
                <Label htmlFor={"namsurnamee"} >
                Surname:
                </Label>
                <Field as="input" id={"surname"} name={"surname"} className='field'></Field>
            </div>

            <div className="input">
                <Label htmlFor={"email"} >
                E-mail:
                </Label>
                <Field as="input" type="email" id={"email"} name={"email"} className='field'></Field>
            </div>
            <div className="number">
                <Label htmlFor={"number"} >
                    Contact number:
                </Label>
                <Field as="input" id={"number"} name={"number"} className='field'></Field>
            </div>
            <div className="message">
                <Label htmlFor={"message"} >
                Message: 
                </Label>
                <Field as="textarea"  id={"message"} name={"message"} className='field'></Field>
            </div>
            
            <SubmitBtn type="submit">
                Submit
            </SubmitBtn>
        </Form>
    )}
</Formik>
  )
}
