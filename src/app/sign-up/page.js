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


  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    alert(values);

    try {
      // เพิ่มโค้ด Axios.post เพื่อส่งข้อมูลไปยัง API
      await Axios.post(`${BASE_URL}/users`, values)
        .then((res) => console.log("Registered Successfully!!"))
        .catch((err) => console.log(err));

      setValues({
        username: "",
        email: "",
        password: "",
        date: "",
      });

      // window.location.reload();
    } catch (error) {
      console.log('error', error);
    }
  };

    return (
      <form className={styles.form} action={formAction}>
        <input type="text" placeholder="username" name="username" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input
          type="password"
          placeholder="password again"
          name="passwordRepeat"
        />
        <button>Register</button>
        
        <Link href="/login">
          Have an account? <b>Login</b>
        </Link>
      </form>
    );
  };
  
export default Singup;