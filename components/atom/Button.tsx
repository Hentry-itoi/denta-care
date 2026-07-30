'use client';
import React from 'react';
import { VariantProps } from 'class-variance-authority';
import {
  Button as UiButton,
  buttonVariants as UiButtonVariants,
} from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = React.ComponentProps<typeof UiButton> &
  VariantProps<typeof UiButtonVariants> & {
    iconColor?: string;
    fill?: boolean;
    animationClass?: string;
    label?: string;
    loading?: boolean;
    loadingText?: string;
    linkHref?: string;
  };

const ButtonComponent = ({
  children,
  className,
  size,
  variant,
  iconColor,
  fill,
  animationClass,
  label,
  loading,
  loadingText,
  linkHref,
  ...props
}: Props) => {
  const content = (
    <>
      {loading ? (
        <>
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          {loadingText || 'Loading...'}
        </>
      ) : (
        children ?? label
      )}
    </>
  );

  return (
    <UiButton
      asChild={!!linkHref}
      variant={variant}
      size={size}
      className={cn(className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {linkHref ? <Link href={linkHref}>{content}</Link> : content}
    </UiButton>
  );
};

export const Button = React.memo(ButtonComponent);
