import { cva } from 'class-variance-authority';
import { ColorScheme } from '@/app/_types/color-scheme';

/**
 * 🎨 Floating element background variants using CVA
 * Provides consistent styling for decorative blur elements across color schemes
 */
export const floatingElementBackgroundVariants = cva(
  'absolute rounded-full blur-sm -z-20', // base classes
  {
    variants: {
      colorScheme: {
        [ColorScheme.PRIMARY]:
          'bg-gradient-to-br from-violet-primary/30 to-transparent',
        [ColorScheme.SECONDARY]:
          'bg-gradient-to-br from-violet-secondary/30 to-transparent',
        [ColorScheme.TERTIARY]:
          'bg-gradient-to-br from-violet-tertiary/30 to-transparent',
        [ColorScheme.INNOVATION]:
          'bg-gradient-to-br from-yellow-innovation/30 to-transparent',
        [ColorScheme.SUCCESS]:
          'bg-gradient-to-br from-green-success/30 to-transparent',
        [ColorScheme.ATTENTION]:
          'bg-gradient-to-br from-red-attention/30 to-transparent',
      },
      size: {
        small: 'w-8 h-8',
        medium: 'w-12 h-12',
        large: 'w-16 h-16',
        'extra-large': 'w-20 h-20',
      },
      position: {
        'top-left': '-top-4 left-1/4',
        'top-right': '-top-4 right-1/4',
        'bottom-left': '-bottom-4 left-1/4',
        'bottom-right': '-bottom-4 right-1/4',
        'center-left': 'top-1/2 -translate-y-1/2 left-1/8',
        'center-right': 'top-1/2 -translate-y-1/2 right-1/8',
      },
    },
    defaultVariants: {
      colorScheme: ColorScheme.PRIMARY,
      size: 'medium',
      position: 'top-left',
    },
  }
);

/**
 * 🌟 Type for floating element props
 */
export type FloatingElementVariant = {
  colorScheme: ColorScheme;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'center-left'
    | 'center-right';
};
