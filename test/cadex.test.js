// On teste notre service !

const cadexService = require("../app/service/cadex");

const data = require("../data/parts.json");

// services
const cadex = cadexService.generate();
const randomName = cadexService.getRandomName();
const randomAdjective = cadexService.getRandomAdjective();
const randomVerb = cadexService.getRandomVerb();
const randomComplement = cadexService.getRandomComplement();

const namesCollection = data.names;
const adjectivesCollection = data.adjectives;
const verbsCollection = data.verbs;
const complementsCollection = data.complements;

/**
 test:(message, function)
  it:(message, function)
  test & it permettent de tester quelque chosse
 */

describe("Cadex object", () => {
    it("It should be an objet", () => {
        // expect(typeof cadex).toBe("object");
        expect(cadex).toBeInstanceOf(Object);
    });

    it("should have a name, verb, complement, adjective properties", () => {
        expect(cadex).toHaveProperty("name");
        expect(cadex).toHaveProperty("verb");
        expect(cadex).toHaveProperty("complement");
        expect(cadex).toHaveProperty("adjective");
    });
});

describe("ramdom name", () => {
    /* Je teste le type (string) */
    it("should be a string", () => {
        expect(typeof randomName).toBe("string");
    });
    /* Je teste qu'il soit bien dans la liste des names */
    it("should be in names collection", () => {
        expect(namesCollection).toContain(randomName);
    });
    it("should be in adjectives collection", () => {
        expect(adjectivesCollection).toContain(randomAdjective);
    });
    it("should be in verbs collection", () => {
        expect(verbsCollection).toContain(randomVerb);
    });
    it("should be in complements collection", () => {
        expect(complementsCollection).toContain(randomComplement);
    });
});
describe("Generate sentence", () => {
    const phrase = cadex.glue();
    it("should be a string", () => {
        expect(typeof phrase).toBe("string");
    });
    it("should be a sentence with name, adjective, verb, complement ", () => {
        expect(phrase).toContain(cadex.name);
        expect(phrase).toContain(cadex.verb);
        expect(phrase).toContain(cadex.complement);
        expect(phrase).toContain(cadex.adjective);
    });
});
