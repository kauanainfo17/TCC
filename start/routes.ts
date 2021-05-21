
import Route from '@ioc:Adonis/Core/Route'

//Route.on('/').render('inicial').as('root')
//Route.on('/User').render('user')
// Route.on('/Receita').render('recipe')
// Route.on('/Acesso').render('acesso')

//Route.get('Receita', 'RecipesController.index')
Route.get('Acesso','AuthenticationController.index')
Route.get('User' , 'UsersController.index')
Route.get('', 'RecipesController.index')
Route.get('/Showreceita','RecipesController.show')