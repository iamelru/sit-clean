import { Unit } from "../unit";
import { Nullable } from "../utility";

export abstract class Value {
  /**
   * @description Generic value constructor. Extend it to create a new value type.
   * @param { number } a Amount of the value.
   * @param { string } u Units to use
   * @param { string } ifNull If amount is null, return this as a part of the value.
   */
  constructor(
    private readonly a: Nullable<number>,
    private readonly u: Unit,
    private readonly ifNull = "N/A"
  ) {
    if (!u) throw new Error("Unit is required");
    if (typeof ifNull !== "string")
      throw new Error("Value ifNull must be a string");
  }

  /**
   * @description Returns the amount as a number.
   * Remember null can be used in calculations. 1 + null = 1.
   */
  get amount(): Nullable<number> {
    return this.a;
  }

  /**
   * @description Returns the units as a string.
   */
  get unit(): Unit {
    return this.u;
  }

  /**
   * @description Returns the value as a string of amount and units.
   * @example '1230.55 USD'
   * @example '2150 kW'
   */
  get value(): string {
    return `${this.a ?? this.ifNull} ${this.u.short}`;
  }

  /**
   * @description Returns the formatted value as a string of amount and units.
   * @example '1,230.55 USD'
   * @example '2,150 kW'
   * @example 'N/A'
   */
  get formattedValue(): string {
    try {
      return `${this.formatter(this.a)} ${this.u}`;
    } catch (e) {
      return `${this.ifNull} ${this.u}`;
    }
  }

  /**
   * @param a Amount
   * @returns Formatted amount
   * @example 1,230.55
   */
  private formatter(a: typeof this.amount): string {
    return a?.toString() ?? this.ifNull;
  }
}
