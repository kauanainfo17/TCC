import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
// import User from 'App/Models/User'

export default class UsersController {
  public async index ({  }: HttpContextContract) {
    
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({ request, response }: HttpContextContract) {
    const data = request.only(['email', 'password', 'name', 'ingredients'])
    await User.create(data)
    response.redirect().toRoute('users.index')
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
