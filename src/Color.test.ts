import Color from './Color';

describe('Color', () => {
  it('constructor', () => {
    let color = new Color('white');
    expect(color.valueOf()).toEqual('#ffffff');
    color = new Color('black');
    expect(color.valueOf()).toEqual('#000000');
    color = new Color('#FF0066');
    expect(color.valueOf()).toEqual('#ff0066');
  });

  describe('toEqual', () => {
    it('an instance equals itself', () => {
      const color = new Color('red');
      expect(color.toEqual(color)).toEqual(true);
    });

    it('two colors with the same value are equal', () => {
      const color1 = new Color('red');
      const color2 = new Color('#ff0000');
      expect(color1.toEqual(color2)).toEqual(true);
    });
  });

  describe('Color.getHexFromHexOrName', () => {
    it('works with color names', () => {
      expect(Color.getHexFromHexOrName('white')).toEqual('#ffffff');
      expect(Color.getHexFromHexOrName('Brown')).toEqual('#a52a2a');
    });

    it('works with hex colors', () => {
      expect(Color.getHexFromHexOrName('#FF00AA')).toEqual('#ff00aa');
      expect(Color.getHexFromHexOrName('#09D')).toEqual('#0099dd');
    });

    it('fails on input that isn\'t a CSS color name or valid hex', () => {
      expect(
        () => Color.getHexFromHexOrName('#fa'),
      ).toThrowError('"#fa" is not a valid hex color or CSS color name.');

      expect(
        () => Color.getHexFromHexOrName('burple'),
      ).toThrowError('"burple" is not a valid hex color or CSS color name.');

      expect(
        () => Color.getHexFromHexOrName(undefined),
      ).toThrowError('"undefined" is not a valid hex color or CSS color name.');
    });
  });
});
