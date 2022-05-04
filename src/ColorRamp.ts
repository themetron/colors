import Color from './Color';
import { guessColorRamp } from './guessers';

type ColorRampArg0 = ({ name?: string; base?: string });

function ColorRamp({
  name,
  base,
}: ColorRampArg0 = {}) {
  if (!name || typeof name !== 'string') throw new Error(`Missing/invalid \`name\` property, received ${name}`);

  try {
    this._base = new Color(Color.getHexFromHexOrName(base)).valueOf();
  } catch(e) {
    throw new Error(`Missing/invalid \`base\` property: ${e.message}`);
  }

  this._name = name;
  this._values = guessColorRamp(this._base);
}

ColorRamp.prototype.base = function(b = undefined) {
  if (typeof b === 'undefined') return this._base;
  this._base = new Color(Color.getHexFromHexOrName(b)).valueOf();
  this._values = guessColorRamp(this._base);
  return this;
};

ColorRamp.prototype.name = function(n = undefined) {
  if (typeof n === 'undefined') return this._name;
  this._name = n;
  return this;
};

ColorRamp.prototype.values = function(v = undefined) {
  if (typeof v === 'undefined') return this._values;
  throw new Error(
    'Setting values directly is not supported. If you want to change the color ramp, set a new base color with `colorRamp.base()`',
  );
};

ColorRamp.validate = function() {
  return false;
};

/*
{
  base: '#397f3e',
  name: 'danger',
  values: [
    '#010101' // array starting at 10, ending at 100
  ],
  // Do we want an "extends" here?
}
*/

export default ColorRamp;
