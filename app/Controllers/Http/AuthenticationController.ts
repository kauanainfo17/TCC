import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthenticationController {
  public async index ({ view }: HttpContextContract) {
    return view.render('user')
  }

  public async create ({}: HttpContextContract) {
  }

  public async store({ request, response, auth, session }: HttpContextContract) {
    const data = request.only(['name', 'email', 'password'])
    try {
      const user = await User.create(data)
      await auth.login(user, true)
    } catch (error) {
      session.flash('errors', 'Erro no registro. Verifique suas informações.')
      return response.redirect().toRoute('auth.register')
    }
    response.redirect().toRoute('root')
  }

  public async login({ view }: HttpContextContract) {
    return view.render('acesso')
  }

  public async verify({ request, response, auth }: HttpContextContract) {
    const data = request.only(['email', 'password', 'remember'])
    await auth.attempt(data.email, data.password, data.remember === 'true')
    response.redirect().toRoute('root')
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()
    response.redirect().toRoute('root')
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
