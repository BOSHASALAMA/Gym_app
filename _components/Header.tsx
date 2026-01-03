"use client";
import React, { use, useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const Header =  () => {
  const { user } = useUser();
  const [userRole, setUserRole] = useState<string | null>(null)

useEffect(() => {
    // Reset userRole when user logs out
    if (!user) {
      setUserRole(null);
      return;
    }

    const fetchUserRole = async () => {
      if (user?.id && user?.primaryEmailAddress?.emailAddress) {
    try { 
      const response = await fetch('/api/user',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          userId: user.id,
          email: user.primaryEmailAddress.emailAddress,
          name: user.fullName
      })
      });
      const data = await response.json();
      console.log("Fetched user data:", data);
      setUserRole(data.role);
    } catch (error) {
      console.error("Error fetching user role:", error); 
      }}

}  
fetchUserRole();  
  }, [user])

  const isAdmin = userRole === "admin"
  const isUser = userRole === "user"
;
  return (
    <div>
      <header className="bg-linear-to-r from-orange-950 via-black to-red-900 z-50 shadow-lg shadow-red-400 fixed  w-full text-white overflow-x-hidden">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="/"
            prefetch={true}
            className="text-3xl font-bold flex gap-2 items-center text-red-500"
          >
            <Dumbbell className="text-white w-8 h-8" />
            FITNESS
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-20 m-30">
            <Link href="/" prefetch={true}>Home</Link>
            <Link href="#"prefetch={true} onClick={(e) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  }}>About</Link>
            <Link href="#" prefetch={true} onClick={(e) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({
      behavior: 'smooth'
    });
  }}>Pricing</Link>
            <Link href="#" prefetch={true} onClick={(e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  }}>Contact</Link>
          </div>
          <div className="w-full hidden md:flex justify-center gap-24">
            <UserButton />
            {user ? (
              <SignOutButton>
                <Button>sign out</Button>
              </SignOutButton>
            ) : (
              <SignInButton mode="modal">
                <Button>sign in</Button>
              </SignInButton>
            )}
          </div>
{isAdmin && (
  <div>
    <Link href="/orders" prefetch={true}>
    <Button variant="outline">Orders</Button>
    </Link>
  </div>
)}
          {/* Mobile Menu (Client Component) */}
          <MobileMenu />
        </nav>
      </header>
    </div>
  );
};
