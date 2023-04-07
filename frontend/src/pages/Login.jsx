
import { axiosClient } from "../axios-client.js";
import { useStateContext } from "../contexts/ContextProvider.js";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import TextFieldComponent from "../components/formComponents/TextFieldComponent.jsx";
import FormHeaderText from "../components/formComponents/FormHeaderText.jsx";
import SubmitBtn from "../components/formComponents/SubmitBtn.jsx";
import FormLink from "../components/formComponents/FormLink.jsx";
import FormError from "../components/formComponents/FormError.jsx";


export default function Login() {
  const { setUser, setToken } = useStateContext()
  const [error, setError] = useState(null)

  const loginFormSubmit = async (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    }

    axiosClient.post('/users/login', payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch((err) => {
        setError(err.response.data.message)
      })
  }

  const theme = createTheme();

  const validationSchema = Yup.object({
    email: Yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup
      .string('Enter your password')
      .min(5, 'Password should be of minimum 5 characters length')
      .required('Password is required'),
  });


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
          <FormHeaderText text="Sign In" varient="h5" />

          {error && <FormError error={error} /> }

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => { loginFormSubmit(values) }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>

                <Box noValidate sx={{ mt: 1 }}>
                  <TextFieldComponent id="email" name="email" label="Email Address" formik={formik} />
                  <TextFieldComponent id="password" name="password" label="Password" formik={formik} type="password" />
                  <SubmitBtn text="Sign In" />
                  <Grid container>
                    <Grid item xs></Grid>
                    <Grid item>
                      <FormLink to="/signup" text="Don't have an account? Sign Up" />
                    </Grid>
                  </Grid>
                </Box>

              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>

  )
}