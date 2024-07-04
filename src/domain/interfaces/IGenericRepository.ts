export interface RepositoryGeneric<T, K> {
  getAll(): Promise<T[]>
  getById(id: K): Promise<T>
  save(entity: T): Promise<T>
  update(id: K, entity: T): Promise<T>
  delete(id: K): Promise<T>
}