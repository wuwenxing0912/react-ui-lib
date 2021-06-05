import classes from '../classes';

describe('classes', () => {
  it('接受1个 className', () => {
    const className = classes('a');
    expect(className).toEqual('a');
  });

  it('接收2个 className', () => {
    const className = classes('a', 'b');
    expect(className).toEqual('a b');
  });

  it('接收 undefined', () => {
    const className = classes('a', undefined);
    expect(className).toEqual('a');
  });

  it('不接收参数', () => {
    const className = classes();
    expect(className).toEqual('');
  });
})