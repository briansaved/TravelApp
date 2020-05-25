import { getData } from "./server";

test("CitiInfo to be undefined", () => {
  expect(getData).toBeUndefined();
});
