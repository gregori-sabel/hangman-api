import Category from '#models/category'
import { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  async store({ request, response }: HttpContext) {
    const body = request.body()

    const category = await Category.create(body)

    response.status(201)

    return {
      message: 'Categoria criada com sucesso!',
      category: category,
    }
  }
  async index() {
    const categories = await Category.all()
    return {
      categories: categories,
    }
  }
}
