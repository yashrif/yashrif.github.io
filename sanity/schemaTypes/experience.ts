import { defineArrayMember, defineField, defineType } from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array' as const,
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Experience', value: 'experience' },
          { title: 'Education', value: 'education' },
          { title: 'Activity', value: 'activity' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'The exact name of the react-icon (e.g., FaRocket)',
    }),
  ],
  preview: {
    select: {
      title: 'organization',
      subtitle: 'designation',
    },
  },
})
