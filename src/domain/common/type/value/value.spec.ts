import { expect } from "chai";

import { Value } from "./value";
import { Unit } from "../unit";

class TestValue extends Value {}
class TestUnit extends Unit {}


describe("Value", () => {
  it("should  throw when unit is not provided", () => {
    expect(() => new TestValue(1, null)).to.throw("Unit is required");
  });

  it("should return amount when amount is not provided", () => {
    const value = new TestValue(null, new TestUnit("short"));
    expect(value.amount).to.equal(null);
  });

  it("should return value when amount is not provided", () => {
    const value = new TestValue(null, new TestUnit("short"));
    expect(value.value).to.equal("N/A short");
  });

  it("should return formatted value when amount is not provided", () => {
    const value = new TestValue(null, new TestUnit("short"));
    expect(value.formattedValue).to.equal("N/A short");
  });
});
