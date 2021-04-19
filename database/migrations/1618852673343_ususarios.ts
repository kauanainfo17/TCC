import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ususarios extends BaseSchema {
  protected tableName = 'ususarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.string('email')
      table.string('senha')
      //table.foreign('author').references('restricaoId').inTable('restricoes');
      table.timestamps(true)

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
