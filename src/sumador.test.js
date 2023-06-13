import ocurrencias from "./sumador.js";

describe("ocurrencias", () => {
  it("deberia mostra el numero de ocurrencias", () => {
    expect(ocurrencias("El","El")).toEqual("ElEl:1 ");
  });
  it("deberia mostra el numero de ocurrencias", () => {
    expect(ocurrencias("El password","El password")).toEqual("El,passwordEl:1 ");
  });
});
