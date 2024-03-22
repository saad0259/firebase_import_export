const { initializeFirebaseApp } = require("firestore-export-import");
const { backup } = require("firestore-export-import");
const fs = require("fs").promises;
require("dotenv").config();
const collections = require("./constants");

//import serviceAccount from json file
const serviceAccount = require("./giftola-4b95c-firebase-adminsdk-n936i-d73bc0a6b8.json");
const firestore = initializeFirebaseApp(serviceAccount);

collections.forEach((collection) => {
  backup(firestore, collection).then((data) => {
    console.log(`${collection} : ${collection.length}`);

    fs.writeFile(`backup/${collection}.json`, JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log(`${collection} done : ${data.length}`);
    });

    //?: Why did i write this?
    // fs.writeFileSync(`backup/${collection}.json`, JSON.stringify(data)).then(
    //   (data) => console.log(`${collection} done`)
    // );
  });
});
