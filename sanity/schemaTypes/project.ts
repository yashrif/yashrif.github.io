import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      description: 'A concise summary for cards/previews.',
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array' as const,
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array' as const,
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image' as const,
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url' as const,
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url' as const,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean' as const,
      initialValue: false,
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number' as const,
      initialValue: 0,
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text' as const,
      rows: 3,
      fieldset: 'seo',
    }),
    defineField({
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image' as const,
      fieldset: 'seo',
    }),
  ],
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO & Social Sharing',
      options: { collapsible: true, collapsed: true },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      media: 'image',
    },
  },
})
