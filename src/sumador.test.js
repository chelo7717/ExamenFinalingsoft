import ocurrencias from "./sumador.js";

describe("ocurrencias", () => {
  it("deberia mostra el numero de ocurrencias", () => {
    expect(ocurrencias("El","El")).toEqual("El:1");
  });
});
