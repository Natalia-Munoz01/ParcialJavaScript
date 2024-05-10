const express = require("express");
const path = require("path");

const app = express();

//setters
app.use(express.static("public"));
app.use(express.json());
app.set("views", "./views");
app.set("view engine", "ejs");
app.set("PORT", process.env.PORT || 3001);

//midleware
app.use("/", require("./routers/index"));

app.listen(app.get("PORT"), () =>
    console.log(`Server listen at Port ${app.get("PORT")}`)
);
