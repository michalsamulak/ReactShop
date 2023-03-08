import * as Yup from "yup";


export const schema = Yup.object({
    name: Yup.string().required(),
    surname: Yup.string().required(),
    email: Yup.string().email().required(),
    contact_numbe: Yup.number().required(),

});