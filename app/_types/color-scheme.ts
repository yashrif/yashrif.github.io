/**
 * 🎨 Enhanced Color Scheme Types
 * Based on analogous violet harmony with strategic accents
 */
export enum ColorScheme {
  // Primary Brand Colors
  PRIMARY = 'PRIMARY', // Main violet brand
  SECONDARY = 'SECONDARY', // Enhanced violet
  TERTIARY = 'TERTIARY', // Blue-violet tech

  // Strategic Accent Colors
  INNOVATION = 'INNOVATION', // Yellow for AI/ML projects
  SUCCESS = 'SUCCESS', // Green for achievements
  ATTENTION = 'ATTENTION', // Red for warnings
}

/**
 * 🎯 Color scheme mapping for components
 */
export type ColorSchemeMapping = {
  [ColorScheme.PRIMARY]: 'violet-primary';
  [ColorScheme.SECONDARY]: 'violet-secondary';
  [ColorScheme.TERTIARY]: 'violet-tertiary';
  [ColorScheme.INNOVATION]: 'yellow-innovation';
  [ColorScheme.SUCCESS]: 'green-success';
  [ColorScheme.ATTENTION]: 'red-attention';
};

/**
 * 🎪 Section-specific color recommendations
 */
export enum SectionColors {
  HERO = 'violet-soft',
  ABOUT = 'bg-secondary',
  SKILLS = 'violet-primary',
  PROJECTS = 'yellow-innovation',
  EXPERIENCE = 'violet-tertiary',
  CONTACT = 'violet-primary',
}
