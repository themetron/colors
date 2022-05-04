import ColorRamp from './ColorRamp';

describe('ColorRamp', () => {
  describe('constructor', () => {
    it('requires some valid input', () => {
      expect(
        () =>  new ColorRamp({ base: 'blue' }),
      ).toThrowError('Missing/invalid `name` property, received undefined');

      expect(
        () =>  new ColorRamp({ name: 'Blam' }),
      ).toThrowError('Missing/invalid `base` property: "undefined" is not a valid hex color or CSS color name.');
    });

    it('works with valid input', () => {
      const ramp = new ColorRamp({
        name: 'Awesome',
        base: '#F08',
      });

      expect(ramp.name()).toEqual('Awesome');
      expect(ramp.base().valueOf()).toEqual('#ff0088');
      expect(Object.keys(ramp.values())).toHaveLength(10);

      // console.log(ramp);
    });
  });
});
