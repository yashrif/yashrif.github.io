import React from 'react';
import classNames from 'classnames';

import { ColorScheme } from '@/app/_types/color-scheme';

/**
 * 🎯 Enhanced Button Component with New Color Scheme
 * @param solid - Determines if button has solid background
 * @param colorScheme - Color scheme from enhanced enum
 * @param className - Additional CSS classes
 * @param children - Button content
 */
const Button = ({
  solid,
  colorScheme,
  className,
  children,
  ...rest
}: {
  solid?: boolean;
  colorScheme?: ColorScheme;
  className?: string;
  children: React.ReactNode;
}) => {
  const getColorClasses = () => {
    if (!colorScheme) return '';

    switch (colorScheme) {
      case ColorScheme.PRIMARY:
        return solid
          ? 'bg-violet-primary text-white hover:bg-violet-secondary hover:shadow-violet'
          : 'text-text-primary bg-transparent hover:text-violet-primary hover:bg-violet-soft';

      case ColorScheme.INNOVATION:
        return solid
          ? 'bg-yellow-innovation text-white hover:bg-yellow-warm hover:shadow-innovation'
          : 'text-text-primary bg-transparent hover:text-yellow-innovation hover:bg-yellow-warm/10';

      case ColorScheme.SUCCESS:
        return solid
          ? 'bg-green-success text-white hover:bg-green-growth hover:shadow-success'
          : 'text-text-primary bg-transparent hover:text-green-success hover:bg-green-success/10';

      default:
        return solid
          ? 'bg-violet-primary text-white hover:bg-violet-secondary hover:shadow-violet'
          : 'text-text-primary bg-transparent hover:text-violet-primary hover:bg-violet-soft';
    }
  };

  const classes = classNames(
    className,
    'group',
    'text-lg',
    'px-8',
    'py-5',
    'rounded-button', // Use new button radius
    'transition-all',
    'duration-300',
    'font-medium',
    'cursor-pointer',
    getColorClasses()
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
