"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useDictionary } from "@/providers/Dictionary";
import { Button } from "@/components/Button";

export const HeaderLogin = () => {
  const { data: session } = useSession();
  const dict = useDictionary();
  const divClasses =
    "rounded text-black bg-white p-2 flex items-center gap-2 justify-end";

  return (
    <>
      {session ? (
        <div className={divClasses}>
          <span>{session.user?.name}</span>
          <Button color="amber" text="Dashboard" href="/dashboard" />
          <Button
            text={dict.header?.sign_out}
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
          />
        </div>
      ) : (
        <div className={divClasses}>
          <span>{dict.general.please_log_in}</span>
          <Button
            text={dict.header?.sign_in}
            onClick={() =>
              signIn("auth0", {
                callbackUrl: "/dashboard",
              })
            }
          />
        </div>
      )}
    </>
  );
};
