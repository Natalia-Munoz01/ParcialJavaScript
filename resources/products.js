const products = new Map();

products.set("4356df34", {
    code : "4356df34",
    description: "Jabón de Baño",
    stock: 434,
    value: 8500,
    sotckmin: 10
});

products.set("83hfgr4", {
    code : "83hfgr4",
    description: "Cepillo Bucal",
    stock: 533,
    value: 12800,
    sotckmin: 5
});

products.set("72947-4", {
    code : "72947-4",
    description: "Bolsa Caramelos x 100",
    stock: 35,
    value: 19000,
    sotckmin: 3
});

products.set("69972-A", {
    code : "69972-A",
    description: "Pasta de Seco",
    stock: 97,
    value: 6700,
    sotckmin: 20
});

products.set("78238-N", {
    code : "78238-N",
    description: "Jarra de Yogurth",
    stock: 37,
    value: 23400,
    sotckmin: 5
});

products.set("96383-J", {
    code : "96383-J",
    description: "Panela x Libra",
    stock: 1700,
    value: 1320,
    sotckmin: 30
});

products.set("19374-AS", {
    code : "19374-AS",
    description: "Ceda Dental",
    stock: 12,
    value: 19000,
    sotckmin: 10
});

products.set("88274-JR", {
    code : "88274-JR",
    description: "Paca de Leche",
    stock: 35,
    value: 28400,
    sotckmin: 30
});


module.exports.products = products;