import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Receitas extends BaseSchema {
  protected tableName = 'receitas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.string('preparo')
      //table.foreign('author').references('ingredienteId').inTable('ingredientes');
      //table.foreign('author').references('medidaId').inTable('medidas');
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
