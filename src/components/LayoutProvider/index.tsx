"use client";
import {ImExit} from 'react-icons/Im'
import StyledComponentsRegistry from "../../lib/styled-components/registry";
import { GlobalStyles } from "../../styles/global";
import { Roboto } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import { Spinner } from "../Spinner";

import {
  Ancora,
  Circle,
  DivGroup,
  GroupLinks,
  H1,
  Header,
  Logo,
  Logout,
} from "./style";
import axios from 'axios';

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface ChildrenProps {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: ChildrenProps) => {
  const router = useRouter()

  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState("home");
  
  const pathname = usePathname();
  const isPublicPage = pathname === "/login" || pathname === "/register";
  
  const onLogout = async () => {
    try{
      setLoading(true)
      await axios.post('/api/users/logout')
      toast.success("Logout Successfully")
      router.push("/login")
    } catch(error) {
      toast.error("Logout Failed")
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className={roboto.className}>
      <StyledComponentsRegistry>
        <Toaster />
        {loading && <Spinner />}

        {!isPublicPage && (
          <Header>
            <DivGroup>
              <Logo>
                <Circle /><H1>Anywhere App</H1>
              </Logo>

              <GroupLinks>
                <Ancora
                  href={"/"}
                  onClick={() => setIsActive("home")}
                  isActive={isActive === "home"}
                >
                  Home
                </Ancora>
                <Ancora
                  href={"profile"}
                  onClick={() => setIsActive("profile")}
                  isActive={isActive === "profile"}
                >
                  Profile
                </Ancora>
              </GroupLinks>
            </DivGroup>

            <DivGroup>
              <Logout onClick={onLogout}>
                <ImExit/>
              </Logout>
            </DivGroup>
          </Header>
        )}
        {children}
        <GlobalStyles />
      </StyledComponentsRegistry>
    </div>
  );
};
