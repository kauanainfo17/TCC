import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Recipe from 'App/Models/Recipe'


export default class RecipesController {
  public async index ({ view }: HttpContextContract) {
    const recipes = await Recipe.all()
    return view.render('inicial', { recipes } )

  }

  public async create ({view}: HttpContextContract) {
    return view.render('recipe')

  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({view}: HttpContextContract) {
    const recipes = await Recipe.all()
    return view.render('showrecipe', {recipes})
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
