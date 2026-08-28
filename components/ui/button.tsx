import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils'
import React from 'react';

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-300 ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
        variant: {
        default:
          'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0',
        outline:
          'border-2 border-primary/20 bg-background/50 backdrop-blur-sm text-foreground hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0 aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 shadow-sm hover:shadow-md',
        secondary:
          'bg-secondary/80 text-secondary-foreground shadow-sm hover:bg-secondary hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0 backdrop-blur-md aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost:
          'hover:bg-primary/10 hover:text-primary active:scale-[0.98] aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 transition-colors',
        destructive:
          'bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground shadow-lg shadow-destructive/25 hover:shadow-destructive/40 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0',
        link: 'text-primary underline-offset-4 hover:underline hover:text-primary/80',
      },
      size: {
        default:
          'h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'h-10 gap-2 px-6 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
        icon: 'size-8',
        'icon-xs':
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        'icon-sm':
          'size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg',
        'icon-lg': 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'lg',
    },
  },
)


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

