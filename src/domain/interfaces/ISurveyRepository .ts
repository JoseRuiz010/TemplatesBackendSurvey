 import { Survey } from "../entities/Survey";
import { RepositoryGeneric } from "./IGenericRepository";

export interface ISurveyRepository extends RepositoryGeneric<Survey,string> {

}