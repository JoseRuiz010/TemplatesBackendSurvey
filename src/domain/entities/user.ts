import { Survey } from "./Survey";

export class User {
  private id: number | string;
  private name: string;
  private email: string;
  private userName: string;
  private birthDate: string;
  private password: string | null;
  private phone: string | null;
  private profileImage: string | null;
  private status: string | null;
  private lastSeen: string | null;
  private surveys:Survey[]

  constructor(
    _id: number | string,
    _name: string,
    _email: string,
    _userName: string,
    _birthDate: string,
    _password: string | null,
    _phone: string | null= null,
    _profileImage: string | null=null,
    _status: string | null=null,
    _lastSeen: string | null=null,
    _surveys:Survey[]=[]
  ) {
    this.id = _id;
    this.name = _name;
    this.email = _email;
    this.userName = _userName;
    this.birthDate = new UserBirthDate(_birthDate).value;
    this.password = _password;
    this.phone = _phone;
    this.profileImage = _profileImage;
    this.status = _status;
    this.lastSeen = _lastSeen;
    this.surveys=_surveys
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

  get getPassword(): string | null {
    return this.password;
  }

  get getPhone(): string | null {
    return this.phone;
  }

  get getProfileImage(): string | null {
    return this.profileImage;
  }

  get getStatus(): string | null {
    return this.status;
  }

  get getLastSeen(): string | null{
    return this.lastSeen;
  }
  get getSurveys(): Survey[] | null{
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