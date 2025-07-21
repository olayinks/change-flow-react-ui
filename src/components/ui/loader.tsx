import React from 'react';
import { cn } from '@/lib/utils';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  overlay?: boolean;
}

const Loader = ({ size = 'md', className, overlay = false }: LoaderProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  if (overlay) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div
          className={cn(
            'animate-spin rounded-full border-2 border-muted-foreground/20 border-t-primary',
            sizeClasses[size]
          )}
        />
      </div>
    );
  }

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-2 border-muted-foreground/20 border-t-primary',
          sizeClasses[size]
        )}
      />
    </div>
  );
};

export default Loader;