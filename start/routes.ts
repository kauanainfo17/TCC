
import Route from '@ioc:Adonis/Core/Route'
//import UsersController from 'App/Controllers/Http/UsersController'



Route.get('/', 'RecipesController.index').as('root')
Route.resource('recipes', 'RecipesController')

Route.resource('recipes.ingredients', 'IngredientsController')

Route.get('User' , 'UsersController.index')
Route.resource('users', 'UsersController')

Route.get('/register', 'AuthController.register').as('auth.register')
Route.post('/register', 'AuthController.store').as('auth.store')
Route.get('/login', 'AuthController.login').as('auth.login')
Route.post('/login', 'AuthController.verify').as('auth.verify')
Route.get('/logout', 'AuthController.logout').as('auth.logout')

