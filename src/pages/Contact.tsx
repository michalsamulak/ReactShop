import { Field, FieldProps, Form, Formik } from 'formik';
import { schema } from "../utils/validation";

export const Contact = () => {

  const initialValues = {
    name: "",
    surname: "",
    email: "",
    contact_number: ""
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
                <label htmlFor={"name"} className="form-label">
                    Name
                </label>
                <Field as="input" id={"name"} name={"name"} className='field'></Field>
            </div>
           
            <button type="submit" className="btn">
                Submit
            </button>
        </Form>
    )}
</Formik>
  )
}
