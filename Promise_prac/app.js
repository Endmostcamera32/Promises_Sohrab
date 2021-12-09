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


const jsDevs = developers.filter(d => d.favoriteLanguage === "Javascript");

jsDevs.map(d => {
    d.firstName = d.fullName.split(" ")[0];
    d.lastName = d.fullName.split(" ")[1];
    delete d.fullName;
    return d;
}).reduce((acc, dev) => acc + dev.salary, 0) / jsDevs.length;