import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ingredient from 'App/Models/Ingredient'
import Recipe from 'App/Models/Recipe'
import RecipeIngredient from 'App/Models/RecipeIngredient'
import Unit from 'App/Models/Unit'

export default class IngredientsController {
  public async index({}: HttpContextContract) {}

  public async create({ view, params }: HttpContextContract) {
    const ingredients = await Ingredient.all()
    const units = await Unit.all()
    const recipe = await Recipe.find(params.recipe_id)
    await recipe?.load('recipeIngredients')
    
    return view.render('ingredients/create', { ingredients, units, recipe })
  }

  public async store({ request, response, params }: HttpContextContract) {
    const data = request.only([ 'unitId', 'ingredientId', 'quantity' ])
    await RecipeIngredient.create({ ...data, recipeId: params.recipe_id })
    response.redirect().toRoute('recipes.ingredients.create', { recipe_id: params.recipe_id })
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
