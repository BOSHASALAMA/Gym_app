"use client";
import { useState } from "react";
import Link from "next/link";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        aria-label="Open Menu"
        onClick={() => setOpen(!open)}
        className="text-2xl"
      >
        ☰
      </button>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-black p-6 transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button className="mb-6 text-xl" onClick={() => setOpen(false)}>
          ✕
        </button>

        <nav className="flex flex-col gap-4">
          <Link href="/" prefetch={true} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            href="#"
            prefetch={true}
            onClick={(e) => {
              setOpen(false);
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </Link>
          <Link
            href="#"
            prefetch={true}
            onClick={(e) => {
              setOpen(false);
              e.preventDefault();
              document.getElementById("pricing")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Pricing
          </Link>
          <Link
            href="#"
            prefetch={true}
            onClick={(e) => {
              setOpen(false);
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact
          </Link>
        </nav>
        <div className="w-full mt-12 flex flex-col gap-4">
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
      </aside>
    </div>
  );
};
