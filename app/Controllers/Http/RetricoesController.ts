import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'
import Restricao from 'App/Models/Restricao'

export default class RetricoesController {
  public async index ({}: HttpContextContract) {
    const restricoes = await Restricao.all()
    return View.render('restricoes/index', { restricoes })
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
