(() => {
    alert("yessssss");
})();

document.getElementById("btnSend").addEventListener("click", () => {

    const product = {
        code: "ABC12-DN",
        description: "CHOCOLATE",
        stock: 15,
        value: 5,
        sotckmin: 60
    };

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

