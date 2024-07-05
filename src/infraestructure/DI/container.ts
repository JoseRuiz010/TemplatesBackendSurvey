import { container } from "tsyringe";
import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { MockUserRepository } from "../repositories/mock/MockUserRepository";
import { MongoUserRepository } from "../repositories/mongo/userRepositoryImpl";
import { IValidator } from "../../domain/interfaces/IValidador";
import { CreateUsernDTO, UserValidator } from "../validators/UserValidator";
import { User } from "../../domain/entities/user";

container.register<IUserRepository>('IUserRepository',MockUserRepository);
container.register<IValidator<CreateUsernDTO>>('IUserValidator',UserValidator)