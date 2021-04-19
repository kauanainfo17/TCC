import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Medidas extends BaseSchema {
  protected tableName = 'medidas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('tipo')
      table.float('quantidade')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
