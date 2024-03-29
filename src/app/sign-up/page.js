"use client"
import React from 'react';
import { useState } from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import config from "../utils/config";
import "../utils/config";
import Axios from 'axios';
import { useFormState } from "react-dom";
import { register } from "../lib/action";
import Navbar from "../navbar/Navbar"
import styles from "./registerForm.module.css";

function Singup() {
  
  const BASE_URL = config.SERVER_URL;
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    date: "",
  });

  const [isSubmitSucceed, setIsSubmitSucceed] = useState(false)
  const [state, formAction] = useFormState(register, undefined);
  const [emailExists, setEmailExists] = useState(false);



  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    alert(values);

    try {     
    await   Axios.post(`${BASE_URL}/users`, values)
          
            .then(async (res) => {
              console.log("Registered Successfully!!");
              setIsSubmitSucceed(true);
            })
            .catch((err) => {
              console.log(err);
              setIsSubmitSucceed(false);
            });

          setValues({
            username: "",
            email: "",
            password: "",
            date: "",
          });
        }
     
      
  catch (error) {
    console.log('error', error);
    res.json({
      message: 'insert error',
      error
    })
  }
};


    return (
      
      <CssVarsProvider>
      <Navbar />
      <br/>
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto',
            my: 4,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          
          <div>
            <Typography level="h4" component="h1">
              <b>Register</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>username</FormLabel>
            <Input
              name="username"
              type="username"
              placeholder="johndoe@email.com"
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="your password"
             
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Date of birth</FormLabel>
            <Input
              name="date"
              type="date"
              placeholder="your date of birth"
              
              onChange={handleChange}
              required
            />
          </FormControl>

          <Button sx={{ mt: 1 }} type="submit" onClick={handleSubmit}>
            Sing up
          </Button>
          <Typography
            endDecorator={<Link href="/login">Login</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            You already have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>



    );
  };
  
export default Singup;