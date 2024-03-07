const data = require("../../data/parts.json");

const cadexService = {
    generate() {
        return {
            name: this.getRandomName(),
            verb: this.getRandomVerb(),
            adjective: this.getRandomAdjective(),
            complement: this.getRandomComplement(),
            glue() {
                return `${this.name} ${this.verb} ${this.adjective} ${this.complement}`;
            },
        };
    },
    getRandomName() {
        return getRandomElement(data.names);
    },
    getRandomVerb() {
        return getRandomElement(data.verbs);
    },
    getRandomAdjective() {
        return getRandomElement(data.adjectives);
    },
    getRandomComplement() {
        return getRandomElement(data.complements);
    },
    add(values) {
        const keys = Object.keys(values);
        console.log(keys)
        for (const key of keys) {
            data[`${key}s`].push(values[key]);
        }
    },

};
module.exports = cadexService;

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
