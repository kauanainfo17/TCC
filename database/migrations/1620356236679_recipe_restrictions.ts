import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RecipeRestrictions extends BaseSchema {
  protected tableName = 'recipe_restrictions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes')
      table
        .integer('restriction_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('restrictions')
      table.primary(['recipe_id', 'restriction_id'])
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
