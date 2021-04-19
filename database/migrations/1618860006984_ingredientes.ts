import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ingredientes extends BaseSchema {
  protected tableName = 'ingredientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      //table.foreign('author').references('restricaoId').inTable('restricoes');
      //table.foreign('author').references('medidaId').inTable('medidas');

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
