"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const HeaderLogin = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("auth0")}>Sign in</button>
    </>
  );
};