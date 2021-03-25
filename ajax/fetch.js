const fetch = require("node-fetch");

const users = new Map();

fetch("https://jsonplaceholder.typicode.com/users")

    // .then((res) => res.text())
    // .then((resStr) => {
    //     const data = resStr.JSON.parse(resStr);
        // console.log(data);
    // })

    .then((res) => res.json())
    .then((res) => res.map(user => console.log(users.set(user.name, user.address.geo))));