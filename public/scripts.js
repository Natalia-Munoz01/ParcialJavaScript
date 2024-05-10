(() => {
    alert("yessssss");
})();

document.getElementById("btnSend").addEventListener("click", () => {

    const product = {
        code: 1,
        description: "CHOCOLATE",
        stock: 15,
        value: 5,
        stockmin: "60"
    };


    console.log(JSON.stringify(product));

    const URL = "http://localhost:3001";
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    })
        .then((data) => data.json())
        .then((data) => console.log(data))
        .catch((err) => alert(err));
});
