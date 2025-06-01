/**
 * 🗓️ Date utilities for parsing and sorting timeline durations
 */

/**
 * Parse a duration string to extract start and end dates
 * @param duration - Duration string like "Dec 2024 - May 2025", "2024", "Mar 2020 - Mar 2025"
 * @returns Object with parsed start and end dates
 */
export const parseDuration = (duration: string) => {
  // Handle single year format like "2024"
  if (/^\d{4}$/.test(duration.trim())) {
    const year = parseInt(duration.trim());
    return {
      startDate: new Date(year, 0, 1), // January 1st
      endDate: new Date(year, 11, 31), // December 31st
      isOngoing: false,
    };
  }

  // Handle date ranges like "Dec 2024 - May 2025" or "Mar 2020 - Mar 2025"
  const parts = duration.split(' - ');
  if (parts.length === 2) {
    const startPart = parts[0].trim();
    const endPart = parts[1].trim();

    // Check if it's ongoing (Present, Current, etc.)
    const isOngoing = /present|current|now/i.test(endPart);

    const startDate = parsePartialDate(startPart);
    const endDate = isOngoing ? new Date() : parsePartialDate(endPart);

    return {
      startDate,
      endDate,
      isOngoing,
    };
  }

  // Fallback for unexpected formats
  const currentYear = new Date().getFullYear();
  return {
    startDate: new Date(currentYear, 0, 1),
    endDate: new Date(currentYear, 11, 31),
    isOngoing: false,
  };
};

/**
 * Parse a partial date string (e.g., "Dec 2024", "2024", "Mar 2020")
 * @param dateStr - Partial date string
 * @returns Date object
 */
const parsePartialDate = (dateStr: string): Date => {
  const trimmed = dateStr.trim();

  // Handle "YYYY" format
  if (/^\d{4}$/.test(trimmed)) {
    return new Date(parseInt(trimmed), 0, 1); // January 1st of that year
  }

  // Handle "MMM YYYY" format (e.g., "Dec 2024")
  const monthYearMatch = trimmed.match(/^([A-Za-z]{3})\s+(\d{4})$/);
  if (monthYearMatch) {
    const [, monthStr, yearStr] = monthYearMatch;
    const month = getMonthIndex(monthStr);
    const year = parseInt(yearStr);
    return new Date(year, month, 1);
  }

  // Fallback to current date
  return new Date();
};

/**
 * Get month index from month abbreviation
 * @param monthStr - Month abbreviation (e.g., "Jan", "Feb")
 * @returns Month index (0-11)
 */
const getMonthIndex = (monthStr: string): number => {
  const months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ];

  const index = months.indexOf(monthStr.toLowerCase());
  return index >= 0 ? index : 0;
};

/**
 * Sort timeline items by duration (most recent end date first)
 * @param items - Array of timeline items
 * @returns Sorted array of timeline items
 */
export const sortTimelineByDuration = <T extends { duration: string }>(
  items: T[]
): T[] => {
  return [...items].sort((a, b) => {
    const aParsed = parseDuration(a.duration);
    const bParsed = parseDuration(b.duration);

    // Sort by end date descending (most recent first)
    // If end dates are the same, sort by start date descending
    const endDateDiff = bParsed.endDate.getTime() - aParsed.endDate.getTime();
    if (endDateDiff !== 0) {
      return endDateDiff;
    }

    return bParsed.startDate.getTime() - aParsed.startDate.getTime();
  });
};
