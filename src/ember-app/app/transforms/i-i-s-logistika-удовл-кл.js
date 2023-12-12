import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УдовлКлEnum from '../enums/i-i-s-logistika-удовл-кл';

export default FlexberryEnum.extend({
  enum: УдовлКлEnum,
  sourceType: 'IIS.Logistika.УдовлКл'
});
