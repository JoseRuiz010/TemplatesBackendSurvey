import { UserDTO } from "../dtos/user.dtos";
import { Survey } from "./Survey";

export class User {
  private id: number | string;
  private name: string;
  private email: string;
  private userName: string;
  private birthDate: string;
  private password?: string;
  private phone?: string;
  private profileImage?: string;
  private status?: string;
  private lastSeen?: string;
  private surveys?: Survey[];

  constructor(userDTO:UserDTO) {
    this.id = userDTO.id;
    this.name = userDTO.name;
    this.email = userDTO.email;
    this.userName = userDTO.userName;
    this.birthDate = new UserBirthDate(userDTO.birthDate).value;
    this.password = userDTO.password;
    this.phone = userDTO.phone;
    this.profileImage = userDTO.profileImage;
    this.status = userDTO.status;
    this.lastSeen = userDTO.lastSeen;
    this.surveys = userDTO.surveys?.map(s => new Survey(s)) || [];
  }

  get getId(): number | string {
    return this.id;
  }

  get getName():string{
    return this.name;
  }

  get getEmail(): string {
    return this.email;
  }

  get getUserName(): string {
    return this.userName;
  }

  get getBirthDate(): string {
    return this.birthDate;
  }

  get getPassword(): string | undefined {
    return this.password;
  }

  get getPhone(): string | undefined {
    return this.phone;
  }

  get getProfileImage(): string | undefined {
    return this.profileImage;
  }

  get getStatus(): string | undefined {
    return this.status;
  }

  get getLastSeen(): string | undefined{
    return this.lastSeen;
  }
  get getSurveys(): Survey[] | undefined{
    return this.surveys;
  }
}

class UserBirthDate {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
    this.isValid();
    this.isMayorEdad();
  }

  private isValid(): void {
    const birthDate = new Date(this.value);
    if (isNaN(birthDate.getTime())) {
      throw new Error(`Fecha de nacimiento no válida --> ${this.value}`);
    }
  }
  private isMayorEdad(): void {
    const dateNow = new Date();
    const birthDate = new Date(this.value);

    let age = dateNow.getFullYear() - birthDate.getFullYear();

    const monthDifference = dateNow.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && dateNow.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      throw new Error('Debe ser mayor de edad');
    }
  }
}