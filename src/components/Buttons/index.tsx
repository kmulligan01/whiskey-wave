import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(["transition-colors", "rounded-sm"], {
  variants: {
    variant: {
      default: ["bg-primary", "hover:bg-primary-hover"],
      outline: [
        "border",
        "border-secondary",
        "border-2",
        "text-secondary",
        "bg-transparent",
        "hover:bg-secondary-hover",
      ],
      link: ["text-whiteRock-100", "hover:text-whiteRock-200", "no-underline"],
    },
    size: {
      small: ["p-2", "text-sm"],
      default: ["py-2", "px-4"],
      large: ["py-2", "px-4", "text-large"],
      link: ["p-0"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
}
