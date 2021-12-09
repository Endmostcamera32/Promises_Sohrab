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






// the Last App version 1

const fs = require('fs');
const parser = require('parse-json');





new Promise
((resolve, rejects) =>
    {
        return fs.readFile ("./supply.txt",(err, data) => {
            if (err) {
                rejects(err);
            } else {
                resolve(data);
            }
        });
    }
)
.then(data => {
 let theCofeeArray = [];
 let theCofees = data.toString();
 let theNewCofees =  theCofees.split(/\r?\n/);
 console.log(typeof(theCofees));
 console.log(theNewCofees);
    function viewAllSupply(kindOfCofee) {
        let anArrayWithOnlyTheKindOFCofeeInput = theNewCofees.filter(m => m === kindOfCofee)
        return anArrayWithOnlyTheKindOFCofeeInput.length;
    }
console.log(viewAllSupply("blonde"));
})
.then(data => {
    function addSupply(kindOfCofee) {
        fs.appendFile("./supply.txt",`\n${kindOfCofee}`, cb2);
    }

addSupply("yeye");
})

.catch(err => {
console.log(err);
});





function cb2(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log("Good job")
    }
}

