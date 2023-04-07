import {axiosClient} from "../axios-client.js";
import { useStateContext } from "../contexts/ContextProvider.js";
import { Avatar, Box, Container, createTheme, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Formik } from "formik";
import * as Yup from "yup";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import TextFieldComponent from "../components/formComponents/TextFieldComponent.jsx";
import FormError from "../components/formComponents/FormError.jsx";
import FormHeaderText from "../components/formComponents/FormHeaderText.jsx";
import FormLink from "../components/formComponents/FormLink.jsx";
import SubmitBtn from "../components/formComponents/SubmitBtn.jsx";

export default function Signup() {
  const [error, setError] = useState(null)
  const { setUser, setToken } = useStateContext()

  const onSubmit = (values) => {

    const payload = {
      name: values.name,
      email: values.email,
      password: values.password
    }
    axiosClient.post('/users', payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch(err => {
        setError(err.response.data.message)
      })
  }

  const validationSchema = Yup.object({
    name: Yup
      .string('Enter your name')
      .min(5)
      .required('Name is required'),
    email: Yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup
      .string('Enter your password')
      .min(5, 'Password should be of minimum 5 characters length')
      .required('Password is required'),

    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });


  const theme = createTheme();

  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Formik
          initialValues={{ name: '', email: '', password: '', passwordConfirmation: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => { onSubmit(values) }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>

              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>

                <FormHeaderText text="Sign up" varient="h5" />

                {error && <FormError error={error} /> }

                <Box noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} >
                    <TextFieldComponent id="name" name="name" label="Full Name" formik={formik} />
                    </Grid>
                    <Grid item xs={12}>
                    <TextFieldComponent id="email" name="email" label="Email Address" formik={formik} />
                    </Grid>
                    <Grid item xs={12}>
                    <TextFieldComponent id="password" name="password" label="Password" formik={formik} type="password" />
                    </Grid>
                    <Grid item xs={12}>
                    <TextFieldComponent id="passwordConfirmation" name="passwordConfirmation" label="Confirm Password" formik={formik} type="password" />
                    </Grid>
                  </Grid>
                  <SubmitBtn text="Sign Up" />
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                    <FormLink to="/login" text="Already have an account? Sign in" />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </form>
          )}
        </Formik>

      </Container>
    </ThemeProvider>
  )
}