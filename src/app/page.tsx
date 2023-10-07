import axios from "axios";
import { cookies } from "next/headers";
import { Container, H1 } from "./styles";

export async function getUser() {
  try {
    const response = await axios.get("http://localhost:3000/api/users/me", {
      headers: {
        Cookie: `token=${cookies().get("token")?.value}`,
      },
    });

    return response.data.data;
  } catch (error) {
    return null;
  }
}

export default async function Home() {
  const user: any = await getUser();

  return (
    <Container>
      <H1>Welcome back, {user?.userName}</H1>
    </Container>
  );
}
