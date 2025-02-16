import { delay } from '../../../../../dist';

describe('delay', () => {
  it('0 ms', async () => {
    const start = Date.now();

    await delay(0);

    const elapsed = Date.now() - start;

    expect(elapsed).toBeLessThan(50);
  });

  it('10 ms', async () => {
    const delayTime = 10;

    const start = Date.now();

    await delay(delayTime);

    const elapsed = Date.now() - start;

    expect(elapsed).toBeGreaterThanOrEqual(delayTime);
  });

  it('500 ms', async () => {
    const delayTime = 500;

    const start = Date.now();

    await delay(delayTime);

    const elapsed = Date.now() - start;

    expect(elapsed).toBeGreaterThanOrEqual(delayTime);
  });

  it('5.5 ms', async () => {
    const delayTime = 5.5;

    const start = Date.now();

    await delay(delayTime);

    const elapsed = Date.now() - start;

    expect(elapsed).toBeGreaterThanOrEqual(delayTime);
  });

  it('-40 ms', async () => {
    const delayTime = -40;

    const start = Date.now();

    await delay(delayTime);

    const elapsed = Date.now() - start;

    expect(elapsed).toBeGreaterThanOrEqual(delayTime);
  });
});
