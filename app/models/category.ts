import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Word from './word.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @hasMany(() => Word)
  declare word: HasMany<typeof Word>
}
