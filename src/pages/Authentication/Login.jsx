import { Button, TextField } from '@mui/material'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { loginUserAction } from '../../Redux/Auth/auth.action'
import { useNavigate } from 'react-router-dom'

const initialValues = { email: "", password: "" }

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
})

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("handle submit", values)
    dispatch(loginUserAction(values))
  }

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}>
        <Form className='space-y-5'>
          <div className='space-y-5'>
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                fullWidth>
              </Field>
              <ErrorMessage
                name="email"
                component={"div"}
                className='text-red-500'>
              </ErrorMessage>
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                type="password"
                variant="outlined"
                fullWidth>
              </Field>
              <ErrorMessage
                name="password"
                component={"div"}
                className='text-red-500'>
              </ErrorMessage>
            </div>
          </div>
          <Button
            sx={{ padding: ".8rem 0rem" }} 
            fullWidth 
            type='submit'
            variant='contained' 
            color='primary'>
              Login
          </Button>
        </Form>
      </Formik>
      <div className='flex gap-2 items-center justify-center pt-5'>
        <p>if you don't have account ?</p>
        <Button onClick={() => navigate("/register")}>Register</Button>
      </div>
    </>
  )
}

export default Login;
