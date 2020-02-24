import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Shoes} from '../models';
import {ShoesRepository} from '../repositories';

export class ShoesController {
  constructor(
    @repository(ShoesRepository)
    public shoesRepository : ShoesRepository,
  ) {}

  calculate = (values: number[]): number => {
    return values.reduce(( p, c ) => p + c, 0 ) / values.length;
  };

  @post('/shoes', {
    responses: {
      '200': {
        description: 'Shoes model instance',
        content: {'application/json': {schema: getModelSchemaRef(Shoes)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Shoes, {
            title: 'NewShoes',
          }),
        },
      },
    })
    shoes: Shoes,
  ): Promise<Shoes> {
    const range = [1,2,3,4,5];
    shoes.sizes = shoes.sizes.filter(size => range.includes(size));
    shoes.calculation = this.calculate(shoes.sizes);
    return this.shoesRepository.create(shoes);
  }

  @get('/shoes/count', {
    responses: {
      '200': {
        description: 'Shoes model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Shoes)) where?: Where<Shoes>,
  ): Promise<Count> {
    return this.shoesRepository.count(where);
  }

  @get('/shoes', {
    responses: {
      '200': {
        description: 'Array of Shoes model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Shoes, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Shoes)) filter?: Filter<Shoes>,
  ): Promise<Shoes[]> {
    return this.shoesRepository.find(filter);
  }

  @patch('/shoes', {
    responses: {
      '200': {
        description: 'Shoes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Shoes, {partial: true}),
        },
      },
    })
    shoes: Shoes,
    @param.query.object('where', getWhereSchemaFor(Shoes)) where?: Where<Shoes>,
  ): Promise<Count> {
    const range = [1,2,3,4,5];
    shoes.sizes = shoes.sizes.filter(size => range.includes(size));
    shoes.calculation = this.calculate(shoes.sizes);
    return this.shoesRepository.updateAll(shoes, where);
  }

  @get('/shoes/{id}', {
    responses: {
      '200': {
        description: 'Shoes model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Shoes, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(Shoes)) filter?: Filter<Shoes>
  ): Promise<Shoes> {
    return this.shoesRepository.findById(id, filter);
  }

  @patch('/shoes/{id}', {
    responses: {
      '204': {
        description: 'Shoes PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Shoes, {partial: true}),
        },
      },
    })
    shoes: Shoes,
  ): Promise<void> {
    const range = [1,2,3,4,5];
    shoes.sizes = shoes.sizes.filter(size => range.includes(size));
    shoes.calculation = this.calculate(shoes.sizes);
    await this.shoesRepository.updateById(id, shoes);
  }

  @put('/shoes/{id}', {
    responses: {
      '204': {
        description: 'Shoes PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() shoes: Shoes,
  ): Promise<void> {
    const range = [1,2,3,4,5];
    shoes.sizes = shoes.sizes.filter(size => range.includes(size));
    shoes.calculation = this.calculate(shoes.sizes);
    await this.shoesRepository.replaceById(id, shoes);
  }

  @del('/shoes/{id}', {
    responses: {
      '204': {
        description: 'Shoes DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.shoesRepository.deleteById(id);
  }
}
