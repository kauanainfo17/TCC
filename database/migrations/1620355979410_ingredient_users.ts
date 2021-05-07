import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class IngredientUser extends BaseSchema {
  protected tableName = 'ingredient_user'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      table.primary(['ingredient_id', 'user_id'])
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
