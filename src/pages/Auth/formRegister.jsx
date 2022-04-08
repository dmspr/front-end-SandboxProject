import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import styled from 'styled-components'
import { FormFeedback } from 'reactstrap'


const validationSchema = yup.object().shape({
    name: yup.string().min(3).max(20).required(),
    email: yup.string().email().required('Looks like you forgot something'),
    password: yup.string().min(8).max(16).required(),
    retypePassword: yup.string().oneOf([yup.ref('password'), null], 'Password doesnt match'),
})


export default function FormRegister() {

    let formik = useFormik({
        initialValues: {
            'name': '',
            'email': '',
            'password': '',
            'retypePassword': '',
        },
        validationSchema: validationSchema,
        onSubmit: () => handleRegister()
    })


    const handleRegister = async () => {
        const { name, email, password } = formik.values
        await axios.post(`http://localhost:8080/register`, {
            name,
            email,
            password
        })
            .then(() => {
                window.location = "/login"
            })
            .catch((err) => console.log(err))
    }
    return (
        <Form onSubmit={formik.handleSubmit}>
            <h3>Sign Up</h3>
            {Object.keys(formik.initialValues).map((key, idx) => (
                <Container key={idx}>
                    <Styleinput
                        type={key === "password" || key === "retypePassword" ? "password" : "text"}
                        id={key}
                        name={key}
                        placeholder={key}
                        value={formik.values[key]}
                        onChange={formik.handleChange}
                        invalid={formik.touched[key] && Boolean(formik.errors[key])}
                    />
                    {
                        formik.touched[key] && Boolean(formik.errors[key]) && <FormFeedback className="error-feedback">{formik.errors[key]}</FormFeedback>
                    }
                </Container>
            ))}

            <button className="btn-submit" type="submit">Register</button>
        </Form>
    )
}



const Form = styled.form`
    color:black;
    display:flex;
    flex-direction:column;
    align-items:center;
    h3{
        color:black;
        margin-bottom:1rem;

    }

    .form-control {
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid red;
        color: red;

        &:focus {
            box-shadow: none;
        }
    }
    .invalid-feedback{
        font-size: 12px;
        color:red;
        font-weight:600;
    }

    button{
        width:75%;
        max-width:350px;
        min-width:250px;
        height:25px;
        border:none;
        margin:1rem 0;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius:5px;
        background-color: #fcd051;
        color: #fff;
        font-weight:500;
        cursor:pointer;
        transition: all 0.2s ease-in;

        &:hover {
        transform: translateY(-3px)
        }
    }
`

const Container = styled.div`
    margin: 0.2rem;
    height: 50px;
    text-align: left;
    
`
const Styleinput = styled.input`
    width:80%;
    max-width:350px;
    min-width:250px;
    height:30px;
    border:none;
    margin:0.5rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0,0,0,0.25);
    border-radius:5px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;

    &:hover {
        transform: translateY(-3px)
    }
`