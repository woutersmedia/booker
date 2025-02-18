import { HeaderLogin } from "@/components/Header/HeaderLogin";
import { Navigation } from "@/components/Header/Navigation";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-primary text-white py-8 px-4 xl:px-0" role="banner">
      <div className="container grid grid-cols-2 lg:grid-cols-6 gap-4 justify-center items-center">
        <div className="lg:col-start-1 lg:col-end-4 col-start-1 col-end-3 flex items-center gap-4">
          <Link href="/">
            <h1 className="text-2xl font-bold uppercase">Booker</h1>
          </Link>
          <Navigation />
        </div>
        <div className="lg:col-start-5 lg:col-end-7 col-start-1 col-end-3">
          <HeaderLogin />
        </div>
      </div>
    </header>
  );
};
