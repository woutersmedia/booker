type ButtonBaseProps = {
  text: string;
  color?: "primary" | "red" | "amber";
  small?: boolean;
  onClick?: () => void;
};

type ButtonAsLinkProps = ButtonBaseProps & {
  href: string;
  disabled?: never;
};

type ButtonAsButtonProps = ButtonBaseProps & {
  href?: never;
  disabled?: boolean;
};

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;