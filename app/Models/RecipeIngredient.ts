import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Recipe from './Recipe'
import Unit from './Unit'
import Ingredient from './Ingredient'

export default class RecipeIngredient extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public recipeId: number

  @column()
  public unitId: number

  @column()
  public ingredientId: number

  @column()
  public quantity: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Recipe)
  public recipe: BelongsTo<typeof Recipe>

  @belongsTo(() => Unit)
  public unit: BelongsTo<typeof Unit>

  @belongsTo(() => Ingredient)
  public ingredient: BelongsTo<typeof Ingredient>

  public async fullDescription(): Promise<String> {
    await (this as RecipeIngredient).load('unit')
    await (this as RecipeIngredient).load('ingredient')
    return `${this.quantity} ${this.unit.name}${this.quantity === 1 ? '' : 's'} de ${this.ingredient.name}`
  }
}
