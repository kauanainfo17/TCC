import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RecipeIngredients extends BaseSchema {
  protected tableName = 'recipe_ingredients'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes')
      table.integer('unit_id').unsigned().notNullable().references('id').inTable('units')
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
      table.float('quantity')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
