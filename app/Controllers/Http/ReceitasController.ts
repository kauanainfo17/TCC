import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'
import Receita from 'App/Models/Receita'

export default class ReceitasController {
  public async index ({}: HttpContextContract) {
    const receitas = await Receita.all()
    return View.render('receitas/index', { receitas})
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
