import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async findById(id: string) {
    const question = this.items.find((item) => item.id.toString() === id)

    if (!question) return null

    return question
  }

  async create(answer: Answer) {
    this.items.push(answer)
  }

  async delete(question: Answer) {
    const index = this.items.findIndex((item) => item.id === question.id)

    this.items.splice(index, 1)
  }
}
