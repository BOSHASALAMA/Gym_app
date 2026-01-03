"use client";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();

  useEffect(() => {
    user && createNewUser();
  }, [user]);

  const createNewUser = async () => {
    const result = await fetch(`/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        userId: user?.id,
      }),
    });
    console.log(result);
  };

  return <div>{children}</div>;
};

export default Provider;
