import axios from "axios";
import { cookies } from "next/headers";
import { Container, H1 } from "./styles";
// import { UserTypes } from "../types/userTypes";

// export async function getUser() {
//   try {
//     const response = await axios.get(`${process.env.domain}/api/users/me`,{
//       headers: {
//         Cookie: `token=${cookies().get("token")?.value}`,
//       },
//     });

//     return response.data.data;
//   } catch (error) {
//     return null;
//   }
// }

export default async function Home() {
  // const user: any = await getUser();

  return (
    <Container>
      <H1>Welcome back</H1>
    </Container>
  );
}
