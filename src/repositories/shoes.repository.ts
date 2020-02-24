import {DefaultCrudRepository} from '@loopback/repository';
import {Shoes, ShoesRelations} from '../models';
import {PostgresqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ShoesRepository extends DefaultCrudRepository<
  Shoes,
  typeof Shoes.prototype.id,
  ShoesRelations
> {

  constructor(
    @inject('datasources.postgresql') dataSource: PostgresqlDataSource,
  ) {
    super(Shoes, dataSource);
  }
}
