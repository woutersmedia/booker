export const Footer = () => {
  const parentYear = new Date().getFullYear();

  const renderFooterLinks = (title: string, links: string[]) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="font-bold uppercase text-white pb-3">{title}</div>
        {links.map((link, index) => (
          <a key={index} href="#" className="hover:underline">
            {link}
          </a>
        ))}
      </div>
    );
  };

  const footerClass =
    "md:col-start-4 md:col-end-13 flex flex-col w-full h-fit text-white p-4 gap-4";
  const gridContainerClass = "grid md:grid-cols-3 grid-cols-1 md:gap-24 gap-12";

  return (
    <>
      <footer className={footerClass} role="contentinfo">
        <div className="container">
          <div className={gridContainerClass}>
            {renderFooterLinks("Booker", [
              "Features",
              "Docs",
              "Pricing",
              "Security",
            ])}
            {renderFooterLinks("About", [
              "About Us",
              "Contact",
              "Support",
              "News",
            ])}
          </div>
        </div>
        <hr className="w-full border-t border-gray-500" />
        <div className="container">
          <div className="">
            © 2024 - {parentYear} Wouters Media - All rights reserved.
            Booker&#8482;
          </div>
        </div>
      </footer>
    </>
  );
};
