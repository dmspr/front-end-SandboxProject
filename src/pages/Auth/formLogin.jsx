import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import styled from 'styled-components'
import { FormFeedback } from 'reactstrap'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const validationSchema = yup.object().shape({
    email: yup.string().email().required('Email Salah'),
    password: yup.string().min(8).max(16).required()
})


export default function FormLogin() {

    const [handlelogin, setHandlelogin] = useState('');
    useEffect(() => {
        setHandlelogin('');
    }, [])

    const handleLogin = async () => {
        const data = formik.values

        await axios.post('http://localhost:8080/login', data)
            .then(res => {
                localStorage.setItem('access_token', res.data.accessToken)
                toast.success('Login Succesfully', {
                    position: "top-center",
                    autoClose: 1500,
                })
                setTimeout(function () { window.location = '/dashboard' }, 1500)
            })
            .catch(err => {
                if (err.response.status === 400)
                    toast.error('Login Failed', {
                        position: "top-center",
                        autoClose: 2000,
                    })
                // setHandlelogin('Login Failed, please check your email or password and try again.');


            })
    }

    const formik = useFormik({
        initialValues: {
            'email': '',
            'password': ''
        },
        validationSchema: validationSchema,
        onSubmit: () => handleLogin()
    })


    // let promise = () => {
    //     const resolveAfter = new Promise((resolve, reject) => {
    //         setTimeout(resolve, 3000);
    //     });
    //     toast.promise(resolveAfter, {
    //         pending:'promise is pending',
    //         success:'promise has resolved',
    //         error:'promise rejected'
    //     })
    // }
    // useEffect(() => {
    //     toast.success('success')
    // }, [])
    // const diffToast = () => {
    //     toast("login Succesfull")
    // }
    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <h3>Log In</h3>
                {
                    Object.keys(formik.initialValues).map((key, idx) => (
                        <Container key={idx} >
                            <Styleinput
                                type={key === "password" ? "password" : "text"}
                                id={key}
                                name={key}
                                placeholder={key}
                                value={formik.values[key]}
                                onChange={formik.handleChange}
                                invalid={formik.touched[key] && Boolean(formik.errors[key])}
                            />

                            {
                                formik.touched[key] && Boolean(formik.errors[key]) &&
                                <FormFeedback className='error-feedback'>{formik.errors[key]}</FormFeedback>
                            }
                        </Container>
                    ))
                }
                <button className="btn-submit" type="submit">Login</button>
                <p className="handlelogin">{handlelogin}</p>
            </Form>

        </>

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
        transform: translateY(-3px);
        }
    }

    p{
        color:red;
        font-size: 13px;
        font-weight:500;

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