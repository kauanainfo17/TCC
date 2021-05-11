import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RestrictionUsers extends BaseSchema {
  protected tableName = 'restriction_user'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer('restriction_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('restrictions')
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      table.primary(['restriction_id', 'user_id'])
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
