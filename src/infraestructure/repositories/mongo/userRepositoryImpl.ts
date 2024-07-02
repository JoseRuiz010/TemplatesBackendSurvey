import { User } from '../../../domain/entities/user';
import { UserRepository } from '../../../domain/interfaces/IUserRepository';

export class UserRepositoyImpl implements UserRepository {
  addColaborador(entity: User): User {
    throw new Error('Method not implemented.');
  }
  get(): Promise<User> {
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