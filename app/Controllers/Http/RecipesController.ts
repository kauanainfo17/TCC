import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ingredient from 'App/Models/Ingredient'
import Recipe from 'App/Models/Recipe'
import Unit from 'App/Models/Unit'

export default class RecipesController {
  public async index({ view, params, request }: HttpContextContract) {
    let recipes
    const search = request.input('search')
    if (search) {
      recipes = await Recipe.query()
        .where('name', 'like', `%${search}%`)
        .orWhereHas('recipeIngredients', (recipeIngredientsQuery) => {
          recipeIngredientsQuery.whereHas('ingredient', (ingredientQuery) => {
            ingredientQuery.where('name', 'like', `%${search}%`)
          })
        })

      //recipes = await Recipe.query().where('name', 'like', `%${search}%`)
    } else {
      recipes = await Recipe.all()
    }
    return view.render('recipes/index', { recipes })
  }

  public async create({ view }: HttpContextContract) {
    const ingredientes = await Ingredient.all()
    const unidades = await Unit.all()
    return view.render('recipes/create', { ingredientes, unidades })
  }

  public async store({ request, response, auth }: HttpContextContract) {
    const user = auth.user!!
    const data = request.only(['name', 'instructions'])
    const recipe = await Recipe.create({ ...data, userId: user.id })
    response.redirect().toRoute('recipes.ingredients.create', { recipe_id: recipe.id })
  }

  public async show({ view, params }: HttpContextContract) {
    const recipe = await Recipe.find(params.id)
    await recipe?.load('recipeIngredients')
    return view.render('recipes/show', { recipe })
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
