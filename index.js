const express = require('express')
const app = express()
const array_routes = require('./lib/routes')
const array_lib = require('./array')
const object_lib = require('./object')
const array_sort = require('./lib/task/task')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the jungle`);
});

app.get("/example-1", (req, res) => {
    let data = ["Red", "Blue", "Yellow", "Green"];
    let manipulation = array_lib(data);

    return res.send(manipulation);
});

app.get('/example-2', (req, res) => {
    let data = {
        firstname: "Hendri",
        lastname: "Yono",
        email: "Hendriyono97@mail.com",
        gender: "man"
    };
    let result = object_lib.manipulate(data);

    return res.send(result);
});

app.get("/example-3", (req, res) => {
    let input = ["Black"];
    let data = ["Red", "Blue", "Yellow", "Green"];
    console.log("before ", data);

    let result = object_lib.merge((data), (input));
    console.log("after ", result);

    return res.send(result);
});

app.get("/example-4", (req, res) => {
    let empty_data = [];
    console.log("before ", empty_data);

    let color = "Red";
    object_lib.add(empty_data, color);
    console.log("after ", empty_data);

    return res.send(empty_data);
});

app.get("/task-1", (req, res) => {
    let alpha = ["Q", "W", "E", "A", "S", "D", "Z", "C"];
    console.log("Before", alpha);

    let result = array_sort.ascending_test(alpha);
    console.log("After", result);

    return res.send(result);
});

app.get("/task-2", (req, res) => {
    let alpha = ["Q", "W", "E", "A", "S", "D", "Z", "C"];
    console.log("Before", alpha);

    let result = array_sort.descending_test(alpha);
    console.log("After", result);

    return res.send(result);
});

app.use("/array", array_routes);

app.listen(8080, () => {
    console.log(`Example app listening on port 8080`)
})