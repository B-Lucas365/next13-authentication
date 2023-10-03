import axios from "axios";
import {cookies} from "next/headers"  

export async function getUser() {
  try {
    console.log(cookies().get("token"))
    const response = await axios.get("http://localhost:3000/api/users/me", {
      headers: {
        Cookie: `token=${cookies().get("token")?.value}`
      }
    });

    return response.data.data;
  } catch (error) {
    return null;
  }
}

export default async function Home() {
  const user: any = await getUser();
  return (
    <div>
      <h1>
        Welcome, {user?.userName}
      </h1>
    </div>
  );
}
