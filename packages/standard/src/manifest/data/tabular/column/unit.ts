import { Type } from '@sinclair/typebox';
import { ColumnClassEnum } from '../../types';
import Dimension from './dimension';

const Unit = Type.Object({
  type: Type.Literal(ColumnClassEnum.UNIT),
  value: Type.String(),
  dimension: Dimension,
  /**
   * TBD the name of this property.
   * Essentially we need a property that can tell us
   * about which column holds the values for this unit.
   *
   * NOTE: there's also the option to define a column-wide unit
   * by specifying a unit in the Measurement or Dimension Spec.
   */
  valueReference: Type.Optional(Type.Number()),
});

export default Unit;
