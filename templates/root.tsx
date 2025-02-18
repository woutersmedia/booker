import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type RootTemplateProps = {
  children: ReactNode;
};

export const RootTemplate = ({ children }: RootTemplateProps) => {
  return (
    <>
      <Header />
      <div className="overflow-x-scroll md:col-start-4 md:col-end-13 max-h-screen">
        <main
          role="main"
          className=" bg-white p-4 my-4 mb-4 dark:bg-zinc-900 rounded min-h-screen relative z-10"
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
