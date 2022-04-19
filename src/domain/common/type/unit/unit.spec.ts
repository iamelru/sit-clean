import { expect } from "chai";
import { Unit } from "./unit.abstract";

class TestUnit extends Unit {}

describe("Unit", () => {
  it("shoud throw when no short name is provided", () => {
    expect(() => new TestUnit(null)).to.throw(
      "Short name for the Unit is not provided"
    );
  });

  it("should return short when long is not provided", () => {
    const unit = new TestUnit("short");
    expect(unit.long).to.equal("short");
  });

  it("should return different values for short and long if long provided", () => {
    const unit = new TestUnit("short", "long");
    expect(unit.long).to.equal("long");
  });
});
