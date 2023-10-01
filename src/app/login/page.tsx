"use client";
import { useState } from "react";
import { Input } from "../../components/Input";
import { Button, Container, Form } from "./styles";
import Link from "next/link";

export default function Login() {
  const [user, setUser] = useState({
    password: "",
    email: "",
  });


  const onLogin = async () => {
    console.log(user)
  }

  return (
    <Container>
      <Form>
        <h1>login</h1>
        <hr />

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
        
        <Button onClick={onLogin}>Login</Button>

        <Link href={"/register"}>
          Don't have an account? Register
        </Link>
      </Form>
    </Container>
  );
}
