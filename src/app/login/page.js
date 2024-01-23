//  pages/login.js
"use client";
import React, { useState } from 'react';
import Axios from 'axios';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import config from '../utils/config';
import { useRouter } from "next/navigation";  // เพิ่ม import
import Navbar from "../navbar/Navbar"

export default function LoginFinal() {
  const BASE_URL = config.SERVER;
  const router = useRouter();  // เพิ่มการใช้ useRouter

  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
    date: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.post(`${BASE_URL}/users`, values);
      console.log("Login Successful:", response.data);

      setValues({
        username: "",
        password: "",
        email: "",
        date: "",
      });

      if (response.data.success) {
        // Login สำเร็จ, ทำการเด้งไปยังหน้าหลัก
        router.push('/');
      } else {
        console.error("Login Failed:", response.data.message);
      }
    } catch (error) {
      console.error('Login Error:', error);
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
              <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              value={values.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
              value={values.password}
              onChange={handleChange}
            />
          </FormControl>

          <Button sx={{ mt: 1 }} type="submit" onClick={handleSubmit}>
            Log in
          </Button>
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
