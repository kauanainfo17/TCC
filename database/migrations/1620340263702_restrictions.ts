import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Restrictions extends BaseSchema {
  protected tableName = 'restrictions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
