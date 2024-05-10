const router = require("express").Router();

const { renderFile } = require("ejs");
const { products } = require("./../resources/products");
const { parse } = require("path");
const { readdir } = require("fs");


router.get("/", (req, res) =>
    res.render("index.ejs", { title: "Gestión de Productos", data: products })
);

router.get("/get-product/:id", (req, res) => {
    const { code } = req.params;

    if (products.has(parseInt(code))) {
        const product = products.get(parseInt(id));

        return res.status(200).json({ state: true, data: product });
    }

    return res.status(200).json({ state: false });
});

router.get("/add-product", (req, res) => {
    res.render("new-product.ejs", { title: "Adicionar Producto" });
});


router.post("/", (req, res) => {
    const { code, description, stock, value, stockmin } = req.body;
    if (!products.has(parseInt(code))) {
        products.set(parseInt(code), {
            code: code,
            description: description,
            stock: stock,
            value: value,
            stockmin: stockmin
        });

        return res
            .status(200)
            .json({ state: true, data: products.get(parseInt(code)) });
    }

    return res
        .status(200)
        .json({ status: false, message: "Producto ya Registrado" });
});



module.exports = router;

