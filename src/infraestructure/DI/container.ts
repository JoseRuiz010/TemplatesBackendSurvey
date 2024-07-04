import { container } from "tsyringe";
import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { MockUserRepository } from "../repositories/mock/MockUserRepository";
import { MongoUserRepository } from "../repositories/mongo/userRepositoryImpl";

container.register<IUserRepository>('IUserRepository',MongoUserRepository);