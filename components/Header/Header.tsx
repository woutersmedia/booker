import { HeaderLogin } from "@/components/Header/HeaderLogin";
import { Navigation } from "@/components/Header/Navigation";
import Link from "next/link";

export const Header = () => {
  return (
    <header
      className="md:col-start-1 md:col-end-4 flex flex-col h-screen w-full place-content-between  shadow-lg dark:shadow-white/5 relative z-20"
      role="banner"
    >
      <div className="">
        <div className="p-4 border-b dark:border-zinc-50/5 border-zinc-950/5">
          <Link href="/">
            <h1 className="text-2xl font-bold uppercase">Booker</h1>
          </Link>
        </div>
        <Navigation />
      </div>
      <HeaderLogin />
    </header>
  );
};
