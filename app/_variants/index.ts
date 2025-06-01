/**
 * 🎭 Centralized Framer Motion Variants Export
 * This file exports all animation variants for consistent reuse across components
 */

// 📦 Container variants
export {
  containerVariants,
  containerFadeVariants,
  heroContainerVariants,
  experienceContainerVariants,
} from './container';

// 🃏 Card and item variants
export {
  itemVariants,
  projectCardVariants,
  serviceCardVariants,
  skillCategoryVariants,
  skillItemVariants,
} from './card';

// 📝 Text and heading variants
export {
  titleContainerVariants,
  titleVariants,
  descriptionContainerVariants,
  descriptionVariants,
  headerVariants,
} from './text';

// ✨ UI element variants
export {
  decorativeBarVariants,
  accentDotVariants,
  glowVariants,
  floatingElementVariants,
  ctaVariants,
  ctaContentVariants,
} from './ui-elements';

// 🧭 Navigation variants
export {
  navItemVariants,
  logoVariants,
  logoTopBorderVariants,
  logoBottomBorderVariants,
  contactVariants,
} from './navigation';

// 🎯 Icon and button variants
export {
  talkIconVariants,
  portfolioIconVariants,
  profileIconVariants,
  homeButtonVariants,
  homeButtonIconVariants,
} from './icon';

// 🌟 Hero section variants
export {
  leftChildVariants,
  ballVariants,
  heroImageVariants,
  eclipseVariants,
} from './hero';

// ⏰ Timeline variants
export {
  timelineLRVariantsVisible,
  timelineLeftVariants,
  timelineRightVariants,
  timelineLRVariantsHold,
  timelineCircleVariantsOnce,
  timelineCircleVariants,
  experienceFlowVariants,
} from './timeline';

// 🎬 Basic fade-in variant (legacy support)
export { default as fadeInVariants } from './fade-in';
