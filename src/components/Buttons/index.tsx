import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const buttonStyles = cva(['transition-colors', 'rounded-sm', 'font-headings'], {
  variants: {
    variant: {
      default: ['bg-yellow-200', 'hover:bg-primary-hover', 'text-stone-600', 'font-bold', 'text-sm'],
      outline: [
        'border',
        'border-secondary',
        'border-2',
        'text-secondary',
        'bg-transparent',
        'hover:bg-secondary-hover',
      ],

      dark: ['bg-primary-dark', 'hover:bg-primary-dark-hover', 'text-whiteRock-100'],
    },
    size: {
      small: ['p-2', 'text-sm'],
      default: ['py-2', 'px-4'],
      large: ['py-2', 'px-4', 'text-large'],
      icon: ['rounded-full', 'w-10', 'h-10', 'flex', 'items-center', 'justify-center', 'p-2.5'],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return <button {...props} className={twMerge(buttonStyles({ variant, size }), className)} />
}
