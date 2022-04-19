import { Nullable } from "../utility";

export abstract class Unit {
  readonly long: string;

  constructor(readonly short: string, long?: string) {
    if (!short) throw new Error("Short name for the Unit is not provided");
    this.long = long ?? short;
  }

  /**
   *
   * @param amount number of something
   * @returns a pluralized string representing units only!
   * @example 'meters'
   * @example 'dollars'
   */
  pluralize(amount: Nullable<number>): string {
    return this.long;
  }
}
