import Link from "next/link";
import { ButtonProps } from "./ButtonProps";

export const Button = ({
  text,
  color,
  small,
  onClick,
  disabled,
  href,
}: ButtonProps) => {
  const getColorClasses = (color: ButtonProps["color"]) => {
    const extraClasses = disabled ? "opacity-40" : "cursor-pointer";

    switch (color) {
      case "red":
        return `bg-red-500 hover:bg-red/50 ${extraClasses}`;
      case "amber":
        return `bg-amber-500 hover:bg-amber/50 ${extraClasses}`;
      case "primary":
      default:
        return `bg-primary hover:bg-primary/50 ${extraClasses}`;
    }
  };

  const getSizeClasses = (small: ButtonProps["small"]) => {
    return small ? "text-sm px-2 py-1" : "text-base px-4 py-2";
  };

  const buttonClasses = `text-white ${getSizeClasses(small)} rounded transition duration-150 ease-in-out ${getColorClasses(color)}`;

  if (href && disabled) {
    throw new Error("Button cannot be disabled when used as a link");
  }

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
