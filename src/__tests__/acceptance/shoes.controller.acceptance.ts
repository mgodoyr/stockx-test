import {Client, expect} from '@loopback/testlab';
import {StockxApplication} from '../..';
import {setupApplication} from './test-helper';

describe('ShoesController', () => {
  let app: StockxApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('create POST /shoes', async () => {
    const body = {
      name: "adidas",
      sizes: [2,4,6,7,3,2]
    };
    const validate = (err: object, response: object) => {
      const expected = {
        id: 1,
        name: "adidas",
        sizes: [2, 4, 3, 2],
        calculation: 2.75
      };
      expect(res.body).to.containEql(expected);
    };
    const res = await client.post('/shoes', validate).send(body).expect(200);

  });
});
