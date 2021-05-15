import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Ingredient from 'App/Models/Ingredient'
//import Recipe from 'App/Models/Recipe'
import Restriction from 'App/Models/Restriction'
import Unit from 'App/Models/Unit'
import User from 'App/Models/User'

export default class DatabaseSeederSeeder extends BaseSeeder {
  public async run() {
    const user = await User.create({
      name: 'Vó Maria',
      email: 'vomaria@gmail.com',
      password: '321231',
    })
    const ingredients = await Ingredient.createMany([
      { name: 'Farinha de milho' },
      { name: 'Fermento' },
      { name: 'Ovo' },
    ])
    const unit = await Unit.create({ name: 'Unidade' })
    const recipe = await user
      .related('recipes')
      .create({ name: 'Bole de milho', instructions: 'Misturar tudo e colocar no forno' })
    await recipe.related('recipeIngredients').createMany(
      ingredients.map((i) => {
        return {
          ingredientId: i.id,
          unitId: unit.id,
          quantity: 1,
        }
      })
    )
    const restrictions = await Restriction.createMany([{ name: 'Gluten' }, { name: 'Milho' }])
    await user.related('restrictions').saveMany(restrictions)
    await user.related('ingredients').save(ingredients[2])
    await recipe.related('restrictions').save(restrictions[1])
  }
}
