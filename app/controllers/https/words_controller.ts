import Category from '#models/category'
import Word from '#models/word'
import type { HttpContext } from '@adonisjs/core/http'

export default class WordsController {
  async store({ request, response }: HttpContext) {
    const body = request.body()
    console.log(body)

    const word = await Word.create(body)

    response.status(201)

    return {
      message: 'Categoria criada com sucesso!',
      word,
    }
  }
  async index() {
    const Words = await Word.all()
    return {
      Words,
    }
  }
  async destroy({ params }: HttpContext) {
    console.log(params)
    const choosenWord = await Word.findOrFail(params.id)
    return {
      choosenWord,
    }
  }
  async randomWordFromCategory({ params }: HttpContext) {
    console.log(params)
    const words = await Word.query().where('categoryId', '=', params.id)

    const randomIndex = Math.floor(Math.random() * words.length)
    const randomWord = words[randomIndex]

    return {
      randomWord,
    }
  }
}
