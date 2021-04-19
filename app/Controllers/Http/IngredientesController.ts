import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'
import Ingrediente from 'App/Models/Ingrediente'

export default class IngredientesController {
  public async index ({}: HttpContextContract) {
    const ingredientes = await Ingrediente.all()
    return View.render('ingredientes/index', { ingredientes })
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
