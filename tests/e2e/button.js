import { Selector, ClientFunction } from 'testcafe';

fixture `Authentication`
  .page `http://localhost:8080/`

test('Button', async t => {
    await t.wait(100000)
});
