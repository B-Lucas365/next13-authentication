"use client";
import { useState } from "react";
import { Input } from "../../components/Input";
import { Button, Container, Content, Form, H1, P } from "./styles";
import Link from "next/link";
import axios from "axios";
import { Spinner } from "../../components/Spinner";
import {toast} from "sonner";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const onRegister = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/register", user);
      toast.success(response.data.message);
      router.push("/login");
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      {loading && <Spinner />}
      <Content>
        <Form>
          <P>START FOR FREE</P>
          <H1>Create new account</H1>

          <div className="group-link">
            <P>Already A Member?</P>
            <Link href={"/login"}>Login</Link>
          </div>

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
            label="Email"
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            error=""
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            error=""
            placeholder="Enter your password"
          />

          <Button onClick={onRegister}>Register</Button>
        </Form>
      </Content>
    </Container>
  );
}
