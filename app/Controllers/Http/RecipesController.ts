import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ingredient from 'App/Models/Ingredient'
import Recipe from 'App/Models/Recipe'
import Unit from 'App/Models/Unit'


export default class RecipesController {
  public async index ({ view }: HttpContextContract) {
    const recipes = await Recipe.all()
    return view.render('inicial', { recipes } )

  }

  public async create ({view}: HttpContextContract) {
    const ingredientes = await Ingredient.all()
    const unidades = await Unit.all()
    return view.render('create', { ingredientes, unidades })
  }

  public async store ({ request, response, params }: HttpContextContract) {
    const data = request.only(['name', 'instructions'])
    await Recipe.create(data)
    // vou pegar o id
    const id = await Recipe.query().select('id').as('last_id')
    // cadastra no recipeingredient o id ingredientes, o id da receita, o id do Usuario e o a quantidade
    this.storeIng(id)
    response.redirect().toRoute('root')
  }

  public async storeIng ({ request, response, params }: HttpContextContract) {
    const data = request.only(['recipeIngredients', 'unitId'])
    await Recipe.create(data)
    // vou pegar o id

    // cadastra no recipeingredient o id ingredientes, o id da receita, o id do Usuario e o a quantidade

    response.redirect().toRoute('root')
  }

  public async show ({view, params}: HttpContextContract) {
    const recipe = await Recipe.find(params.id)
    return view.render('showrecipe', {recipe})
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
