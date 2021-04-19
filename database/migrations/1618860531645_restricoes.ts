import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Restricoes extends BaseSchema {
  protected tableName = 'restricoes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.boolean('contem')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
