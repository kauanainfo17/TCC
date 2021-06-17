
import Route from '@ioc:Adonis/Core/Route'
//import UsersController from 'App/Controllers/Http/UsersController'



Route.get('/', 'RecipesController.index').as('root')
Route.resource('recipes', 'RecipesController')

Route.get('User' , 'UsersController.index')
Route.resource('users', 'UsersController')

Route.get('Acesso','AuthenticationController.index').as('auth.index')
Route.post('/Acesso', 'AuthenticationController.store').as('auth.store')
Route.get('/user', 'AuthenticationController.login').as('auth.login')
Route.post('/user', 'AuthenticationController.verify').as('auth.verify')
Route.get('/logout', 'AuthenticationController.logout').as('auth.logout')


