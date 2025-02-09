type ButtonBaseProps = {
  text: string;
  color?: "primary" | "red" | "amber";
  small?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

type ButtonAsLinkProps = ButtonBaseProps & {
  href: string;
  disabled?: never;
  type?: never;
};

type ButtonAsButtonProps = ButtonBaseProps & {
  href?: never;
  disabled?: boolean;
  type?: ButtonBaseProps["type"];
};

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;