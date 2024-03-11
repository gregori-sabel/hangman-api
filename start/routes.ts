/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const CategoriesController = () => import('#controllers/https/categories_controller')
const WordsController = () => import('#controllers/https/words_controller')
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/', async () => {
      return {
        hello: 'world',
      }
    })
    router.resource('/category', CategoriesController).apiOnly()
    router.resource('/word', WordsController).apiOnly()
    router.get('/randomwordfromcategory/:id', [WordsController, 'randomWordFromCategory'])
  })
  .prefix('/api')
