import { container } from "tsyringe";
import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { MockUserRepository } from "../repositories/mock/MockUserRepository";
import { MongoUserRepository } from "../repositories/mongo/userRepositoryImpl";
import { IValidator } from "../../domain/interfaces/IValidador";
import { CreateUsernDTO, UserValidator } from "../validators/UserValidator";
import { User } from "../../domain/entities/user";
import { MysqlUserRepository } from "../repositories/Mysql/MysqlUserRepository";
import { ISurveyRepository } from "../../domain/interfaces/ISurveyRepository ";
import { MysqlSurveyRepository } from "../repositories/Mysql/MysqlSurveyRepository";

container.register<ISurveyRepository>('ISurveyRepository',MysqlSurveyRepository);
container.register<IUserRepository>('IUserRepository',MysqlUserRepository);
container.register<IValidator<CreateUsernDTO>>('IUserValidator',UserValidator)