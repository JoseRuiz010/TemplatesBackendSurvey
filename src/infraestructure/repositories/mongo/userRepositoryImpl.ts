import { User } from '../../../domain/entities/user';
import { IUserRepository } from '../../../domain/interfaces/IUserRepository';
 
export class MongoUserRepository implements IUserRepository {
  addColaborador(entity: User): User {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  save(entity: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  update(id: string, entity: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}