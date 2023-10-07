"use client";
import { useState } from "react";
import { Input } from "../../components/Input";
import { Button, Container, Content, Form, H1, P } from "./styles";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Spinner } from "../../components/Spinner";


export default function Login() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    password: "",
    email: "",
  });

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      toast.success(response.data.message)
      router.push("/");
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Content>
        {loading && <Spinner />}
        <Form>
          <P>START FOR FREE</P>
          <H1>Log in to your account</H1>
          <div className="group-link">
            <P>Don't Have An Account?</P>
            <Link href={"/register"}>Register</Link>
          </div>

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

          <Button onClick={onLogin}>Login</Button>
        </Form>
      </Content>
    </Container>
  );
}
