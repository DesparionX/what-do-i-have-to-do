import type { IEntity } from "./interfaces/IEntity";

export class FakeDbSet<T extends IEntity<string>> extends Array<T> {
  addAsync(entity: T) {
    this.push(entity);
  }
  removeAsync(entity: T) {
    const index = this.findIndex((e) => e.id === entity.id);
    if (index >= 0) this.splice(index, 1);
  }
  updateAsync(entity: T) {
    const index = this.findIndex((e) => e.id === entity.id);
    if (index >= 0) this[index] = entity;
  }
  async getAllAsync(): Promise<T[]> {
    return this;
  }
  async findByIdAsync<K>(id: K): Promise<T | undefined> {
    const entity = this.find((e) => e.id === id);
    return entity;
  }
}
