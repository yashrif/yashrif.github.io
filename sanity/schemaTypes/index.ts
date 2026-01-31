import { type SchemaTypeDefinition } from 'sanity'
import { experience } from './experience'
import { project } from './project'
import { skill } from './skill'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, project, skill],
}
