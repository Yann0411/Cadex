const cadexService = require("./service/cadex");

const controller = {
    async getCadex(req, res) {
        const cadex = await cadexService.generate();

        const valueToReplace = req.query;

        const copy = { ...cadex, ...valueToReplace };

        res.json(copy.glue());
    },
    async postCadex(req, res) {
        const values = req.body;
        console.log(values);

        cadexService.add(values);
        const cadex = cadexService.generate();
        // console.log(cadex)
        const copy = { ...cadex, ...values };
        // console.log(copy)

        res.json(copy.glue());
    },
};
module.exports = controller;
