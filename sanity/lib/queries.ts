import { defineQuery } from 'next-sanity';

export const PROJECTS_QUERY = defineQuery(`*[_type == "project"] | order(order asc) {
  _id,
  title,
  slug,
  shortDescription,
  description,
  technologies,
  image,
  liveUrl,
  githubUrl,
  featured,
  year,
  order
}`);

export const EXPERIENCE_QUERY = defineQuery(`*[_type == "experience"] | order(startDate desc) {
  _id,
  organization,
  designation,
  duration,
  description,
  category,
  location,
  icon
}`);

export const SKILLS_QUERY = defineQuery(`*[_type == "skillCategory"] | order(order asc) {
  _id,
  title,
  order,
  skills[] {
    name,
    iconName
  }
}`);
