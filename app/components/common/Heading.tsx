import { viewportMargin } from '@/app/assets/data/animation';
import { motion } from 'framer-motion';
import {
  titleContainerVariants,
  titleVariants,
  descriptionContainerVariants,
  descriptionVariants,
  decorativeBarVariants,
  accentDotVariants,
  glowVariants,
  floatingElementVariants,
} from '../../variants';
import {
  floatingElementBackgroundVariants,
  type FloatingElementVariant,
} from '@/app/utils/variants';
import { ColorScheme } from '@/app/types/color-scheme';

type HeadingProps = {
  title: string;
  description: string;
  decorativeColor?: ColorScheme;
};

/**
 * 🎯 Enhanced Heading component with visual flair and consistent design
 * Features flowing backgrounds, gradient accents, sophisticated animations, and multi-color scheme decorative elements
 * @param title - Main heading text
 * @param description - Supporting description text
 * @param decorativeColor - Color scheme for the decorative gradient bar (defaults to INNOVATION)
 * @returns JSX element containing styled heading section with CVA-powered floating elements
 */
const Heading = ({
  title,
  description,
  decorativeColor = ColorScheme.INNOVATION,
}: HeadingProps) => {
  // 🎨 Map color scheme to gradient classes
  const getDecorativeGradientClass = (colorScheme: ColorScheme): string => {
    switch (colorScheme) {
      case ColorScheme.PRIMARY:
        return 'bg-brand-primary';
      case ColorScheme.SECONDARY:
        return 'bg-gradient-to-r from-violet-secondary to-violet-primary';
      case ColorScheme.TERTIARY:
        return 'bg-gradient-to-r from-violet-tertiary to-violet-secondary';
      case ColorScheme.INNOVATION:
        return 'bg-gradient-innovation';
      case ColorScheme.SUCCESS:
        return 'bg-gradient-success';
      case ColorScheme.ATTENTION:
        return 'bg-gradient-attention';
      default:
        return 'bg-gradient-innovation';
    }
  };

  // 🌟 Map color scheme to shadow classes
  const getDecorativeShadowClass = (colorScheme: ColorScheme): string => {
    switch (colorScheme) {
      case ColorScheme.PRIMARY:
      case ColorScheme.SECONDARY:
      case ColorScheme.TERTIARY:
        return 'shadow-violet';
      case ColorScheme.INNOVATION:
        return 'shadow-innovation';
      case ColorScheme.SUCCESS:
        return 'shadow-success';
      case ColorScheme.ATTENTION:
        return 'shadow-attention';
      default:
        return 'shadow-innovation';
    }
  };
  return (
    <motion.div
      className='relative flex flex-col items-center justify-center'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: viewportMargin }}
      variants={titleContainerVariants}
    >
      {/* 🎯 Main Title with Enhanced Styling */}
      <motion.div className='relative' variants={titleContainerVariants}>
        <motion.h2
          className='heading-secondary bg-gradient-to-r from-violet-primary via-violet-secondary to-violet-tertiary bg-clip-text text-transparent relative'
          variants={titleVariants}
        >
          {title}

          {/* ✨ Decorative gradient bar */}
          <motion.div
            className={`absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 rounded-full ${getDecorativeGradientClass(decorativeColor)} ${getDecorativeShadowClass(decorativeColor)}`}
            variants={decorativeBarVariants}
            style={{ width: '60%' }}
          />
        </motion.h2>

        {/* 🌟 Floating accent dots */}
        <motion.div
          className='absolute -top-2 -right-4 w-3 h-3 bg-yellow-innovation rounded-full shadow-innovation'
          variants={accentDotVariants}
          custom={0}
        />
        <motion.div
          className='absolute -bottom-2 -left-4 w-2 h-2 bg-green-success rounded-full shadow-success'
          variants={accentDotVariants}
          custom={1}
        />
      </motion.div>

      {/* 📝 Enhanced Description */}
      <motion.div
        className='relative mt-4'
        variants={descriptionContainerVariants}
      >
        <motion.h3
          className='sub-heading relative'
          variants={descriptionVariants}
        >
          {description}

          {/* 💫 Subtle background glow */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-transparent via-violet-soft/10 to-transparent rounded-2xl -z-10'
            variants={glowVariants}
          />
        </motion.h3>
      </motion.div>

      {/* 🎪 Enhanced Flowing Background Elements with All Color Schemes */}
      {(() => {
        const floatingElements: FloatingElementVariant[] = [
          {
            colorScheme: ColorScheme.PRIMARY,
            size: 'large',
            position: 'top-left',
          },
          {
            colorScheme: ColorScheme.INNOVATION,
            size: 'medium',
            position: 'bottom-right',
          },
          {
            colorScheme: ColorScheme.SUCCESS,
            size: 'small',
            position: 'center-left',
          },
          {
            colorScheme: ColorScheme.ATTENTION,
            size: 'medium',
            position: 'top-right',
          },
        ];

        return floatingElements.map((element, index) => (
          <motion.div
            key={`floating-${index}`}
            className={floatingElementBackgroundVariants({
              colorScheme: element.colorScheme,
              size: element.size,
              position: element.position,
            })}
            variants={floatingElementVariants}
            custom={index}
          />
        ));
      })()}
    </motion.div>
  );
};

export default Heading;
