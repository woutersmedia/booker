"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useDictionary } from "@/providers/Dictionary";
import { Button } from "@/components/Button";

export const HeaderLogin = () => {
  const { data: session } = useSession();
  const dict = useDictionary();
  const divClasses = "p-4 flex items-center gap-2 w-full border-t dark:border-zinc-50/5 border-zinc-950/5";

  return (
    <>
      {session ? (
        <div className={divClasses}>
          <span>{session.user?.name}</span>
          <Button color="amber" text="Dashboard" href="/dashboard" small />
          <Button
            text={dict.header?.sign_out}
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
            small
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
            small
          />
        </div>
      )}
    </>
  );
};
