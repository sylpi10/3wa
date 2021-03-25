const fetch = require("node-fetch");


fetch("https://jsonplaceholder.typicode.com/users")

    // .then((res) => res.text())
    // .then((resStr) => {
    //     const data = resStr.JSON.parse(resStr);
        // console.log(data);
    // })

    .then((res) => res.json())
    // .then((res) => res.map(user => console.log(users.set(user.name, user.address.geo))));
    .then((res => {
        const users = new Map();

        for (const user of res) {
            users.set(user.name, user.address.geo);
        }
        console.log(users);
    }))