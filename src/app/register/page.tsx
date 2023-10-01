"use client";
import { useState } from "react";
import { Input } from "../../components/Input";
import { Button, Container, Form } from "./styles";
import Link from "next/link";

export default function Register() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
  });


  const onRegister = async () => {
    console.log(user)
  }

  return (
    <Container>
      <Form>
        <h1>Register</h1>
        <hr />

        <Input
          label="Username"
          type="text"
          name="userName"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
          error=""
          placeholder="Enter your username"
        />
        <Input
          label="email"
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          error=""
          placeholder="Enter your email"
        />

        <Input
          label="password"
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          error=""
          placeholder="Enter your password"
          
        />
        
        <Button onClick={onRegister}>Register</Button>

        <Link href={"/login"}>
          Alredy have an account? Login
        </Link>
      </Form>
    </Container>
  );
}
