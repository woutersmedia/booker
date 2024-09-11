import { HeaderLogin } from "@/components/Header/HeaderLogin";

export const Header = () => {
  return (
    <header className="bg-primary text-white py-8 px-4 xl:px-0">
      <div className="container">
        Je ma pelle Header
      </div>
      <HeaderLogin />
    </header>
  );
};