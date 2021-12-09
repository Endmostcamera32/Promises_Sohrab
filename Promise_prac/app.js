const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path/posix");
const path = require("path");



new Promise
    ((resolve, rejects) =>
        {
            return fs.readFile("./boombah.txt", (err, data) => {
                if (err) {
                    rejects(err);
                } else {
                    resolve(data);
                }
            });
        }
    )
.then(data => {
    console.log(data.toString());
})

.catch(err => {
    console.log(err);
});