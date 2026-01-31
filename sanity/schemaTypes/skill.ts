import { defineField, defineType } from 'sanity'

export const skill = defineType({
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array' as const,
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Skill Name' },
            { name: 'iconName', type: 'string', title: 'Icon Name' },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'iconName',
            },
          },
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Order Asc',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
