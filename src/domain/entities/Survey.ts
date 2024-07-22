import { SurveyDTO } from "../dtos/user.dtos";
import { User } from "./user";

export class Survey {
  private id: string | number;
  private name: string;
  private description: string;
  private type?: string;
  private sub_type?: string;
  private status?: string;
  private visible?: boolean;
  private enabled: boolean;
  private user?: User;

  constructor(surveyDTO: SurveyDTO) {
    this.id = surveyDTO.id;
    this.name = surveyDTO.name;
    this.description = surveyDTO.description;
    this.type = surveyDTO.type;
    this.sub_type = surveyDTO.sub_type;
    this.status = surveyDTO.status;
    this.visible = surveyDTO.visible;
    this.enabled = surveyDTO.enabled;
    this.user = surveyDTO.user ? new User(surveyDTO.user) : undefined;
  }

  get getId() {
    return this.id
  }
  get getName() {
    return this.name
  }
  get getDescription() {
    return this.description
  }
  get getType() {
    return this.type
  }
  get getSubType() {
    return this.sub_type
  }
  get getStatus() {
    return this.status
  }
  get getVisible() {
    return this.visible
  }
  get getEnabled() {
    return this.enabled
  }
  get getUser() {
    return this.user
  }
}