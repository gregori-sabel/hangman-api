import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'words'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('category_id').notNullable().references('categories.id')
      table.string('name').unique().notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
