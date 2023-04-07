import { Meat } from '../infra/knex/entities/Meat'

export interface IMeatsRepository {
  create(data: ICreateMeatDTO): Promise<Meat>
}