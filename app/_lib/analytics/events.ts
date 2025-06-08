import { trackEvent } from '@/app/_lib/config/analytics';

/**
 * 🎯 Pre-defined analytics events for the portfolio website
 */
export const analyticsEvents = {
  /**
   * 📄 Track page view events
   */
  pageView: (pageName: string) => {
    trackEvent('page_view', {
      page_title: pageName,
    });
  },

  /**
   * 🎯 Track button click events
   */
  buttonClick: (buttonName: string, section?: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      section: section || 'unknown',
    });
  },

  /**
   * 💼 Track project interactions
   */
  projectView: (projectName: string) => {
    trackEvent('project_view', {
      project_name: projectName,
    });
  },

  /**
   * 🔗 Track external link clicks
   */
  externalLinkClick: (url: string, linkText: string) => {
    trackEvent('external_link_click', {
      link_url: url,
      link_text: linkText,
    });
  },

  /**
   * 📧 Track contact form events
   */
  contactFormSubmit: () => {
    trackEvent('contact_form_submit');
  },

  /**
   * 📱 Track social media clicks
   */
  socialMediaClick: (platform: string) => {
    trackEvent('social_media_click', {
      platform,
    });
  },

  /**
   * 📚 Track skill interactions
   */
  skillClick: (skillName: string, category: string) => {
    trackEvent('skill_click', {
      skill_name: skillName,
      skill_category: category,
    });
  },

  /**
   * 🎨 Track theme changes
   */
  themeToggle: (theme: 'light' | 'dark') => {
    trackEvent('theme_toggle', {
      new_theme: theme,
    });
  },
} as const;
