"use client";
import Link from "next/link";
import StyledComponentsRegistry from "../../lib/styled-components/registry";
import { GlobalStyles } from "../../styles/global";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { Toaster } from 'react-hot-toast'
import {CiLogout} from 'react-icons/ci'

const inter = Inter({ subsets: ["latin"] });

interface ChildrenProps {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: ChildrenProps) => {
  const pathname = usePathname();
  const isPublicPage = pathname === "/login" || pathname === "/register";

  return (
    <div className={inter.className}>
      <StyledComponentsRegistry>
        <Toaster />

        {!isPublicPage && (
          <header className="header">
            <h1>Next Auth</h1>
            <div className="header-content">
              <Link href={"/"}>Home</Link>       
              <Link href={"profile"}>Profile</Link>
            </div>

            <CiLogout size={'30px'}/>
          </header>
        )}
        {children}
        <GlobalStyles />
      </StyledComponentsRegistry>
    </div>
  );
};
