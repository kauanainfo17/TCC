import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'
import Medida from 'App/Models/Medida'

export default class MedidasController {
  public async index ({}: HttpContextContract) {
    const medidas = await Medida.all()
    return View.render('medidas/index', { medidas })
  }
  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
