import { ReactNode } from 'react';
import { IconType } from 'react-icons';

/**
 * 🎯 Experience and Education types
 */

export type TimelineItemType = {
  organization: string;
  designation: string;
  duration: string;
  description: string;
  category: ExperienceCategory;
  icon: IconType;
};

export type ExperienceCategory = 'all' | 'experience' | 'education';

export type ExperienceCategoryInfo = {
  label: string;
  icon: ReactNode;
  gradient: string;
  textColor: string;
};
