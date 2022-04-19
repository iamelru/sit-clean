import { Unit } from "../unit";
import { Nullable } from "../utility";

export abstract class Value {
  /**
   * @description Returns amount as is.
   * Let it return null, since 1 + null === 1
   */
  abstract get amount(): Nullable<number>;

  /**
   * @example 'kW'
   */
  abstract get unit(): Unit;

  /**
   * @description Concatinates amount and units into a value representation
   * @example '123 kW'
   */
  abstract get value(): string;

  /**
   *
   * @param amount
   * @returns a formatted amount as a string.
   * @example Jan 15, 2022
   * @example 2,134
   */
  abstract formatAmount(amount: typeof this.amount): string;
}
