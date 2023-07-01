import {
  convertXMLtoJSON,
  formatDate,
  removeSlashes,
  secondsToMinutes,
} from "../../src/utils/functions";
import { xmlMock, jsonMock } from "./__mock__";

describe("test in the utils folder", () => {
  test("convertXMLtoJSON() should work correctly", () => {
    const input = convertXMLtoJSON(xmlMock);
    const output = jsonMock;

    expect(output).toEqual(input);
  });

  test("formatDate() should work correctly", () => {
    const input = "Fri, 23 Jun 2023 17:11:48 -0000";
    const output = formatDate(input);

    expect(output).toEqual("23/06/2023");
  });

  test("removeSlashes() should work correctly", () => {
    const input = "prx_93/c67b9f9b-9889-4b77-a453/90f3289572cc";
    const output = removeSlashes(input);

    expect(output).toEqual("prx_93c67b9f9b-9889-4b77-a45390f3289572cc");
  });

  test("secondsToMinutes() should work correctly", () => {
    const input = 4442;
    const output = secondsToMinutes(input);

    expect(output).toEqual("01:14:02");
  });
});
