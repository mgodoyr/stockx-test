import {Entity, model, property} from '@loopback/repository';

@model()
export class Shoes extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  sizes: number[];

  @property({
    type: 'number'
  })
  calculation: number;

  constructor(data?: Partial<Shoes>) {
    super(data);
  }
}

export interface ShoesRelations {
  // describe navigational properties here
}

export type ShoesWithRelations = Shoes & ShoesRelations;
