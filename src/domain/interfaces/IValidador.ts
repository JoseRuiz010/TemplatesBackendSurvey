export interface IValidator<T> {
    validate(data: T): T;
  }