"use client";
import Link from "next/link";
import StyledComponentsRegistry from "../../lib/styled-components/registry";
import { GlobalStyles } from "../../styles/global";
import { Inter } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { CiLogout } from "react-icons/ci";
import axios from "axios";
import { useState } from "react";
import { Spinner } from "../Spinner";

const inter = Inter({ subsets: ["latin"] });

interface ChildrenProps {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: ChildrenProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onLogout = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/logout");
      toast.success("logout sucessfully");
      router.push("/login");
    } catch (error) {
      toast.error("Logout failed");
    } finally {
      setLoading(false);
    }
  };

  const pathname = usePathname();
  const isPublicPage = pathname === "/login" || pathname === "/register";

  return (
    <div className={inter.className}>
      <StyledComponentsRegistry>
        <Toaster />
        {loading && <Spinner />}

        {!isPublicPage && (
          <header className="header">
            <h1>Next Auth</h1>
            <div className="header-content">
              <Link href={"/"}>Home</Link>
              <Link href={"profile"}>Profile</Link>
            </div>

            <div onClick={onLogout} className="logout">
              <CiLogout size={"30px"} />
            </div>
          </header>
        )}
        {children}
        <GlobalStyles />
      </StyledComponentsRegistry>
    </div>
  );
};
