export const Footer = () => {

  const renderFooterLinks = (title: string, links: string[]) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="font-bold uppercase text-white pb-3">{title}</div>
        {links.map((link, index) => (
          <a key={index} href="#" className="hover:underline">{link}</a>
        ))}
      </div>
    );
  };

  const footerClass = "flex flex-col w-full h-fit bg-primary text-white md:py-14 py-8 px-4 xl:px-0";
  const gridContainerClass = "grid md:grid-cols-3 grid-cols-1 md:gap-24 gap-12";

  return (
    <>
      <footer className={footerClass}>
        <div className="container">
          <div className={gridContainerClass}>
            {renderFooterLinks("Booker", ["Features", "Docs", "Pricing", "Security"])}
            {renderFooterLinks("About", ["About Us", "Contact", "Support", "News"])}
          </div>
        </div>
      </footer>
      <hr className="w-full bg-primary border-t border-gray-500" />
      <footer className="bg-primary text-white md:py-8 py-4 px-4 xl:px-0">
        <div className="container">
          <div className="md:text-center text-left">© 2024 Wouters Media - All rights reserved. Booker&#8482;</div>
        </div>
      </footer>
    </>
  )
    ;
};