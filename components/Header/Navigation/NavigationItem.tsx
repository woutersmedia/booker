import Link from "next/link";
import { track } from "@vercel/analytics";

type NavigationItemProps = {
  label: string;
  href: string;
};

export const NavigationItem = ({ label, href }: NavigationItemProps) => {
  const onClick = () => {
    track("clicked_navigation_item", {
      label,
      href,
    });
  };

  return (
    <li className="hover:text-gray-400">
      <Link href={href} onClick={onClick}>
        {label}
      </Link>
    </li>
  );
};
