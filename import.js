const { initializeFirebaseApp, restore } = require("firestore-export-import");
require("dotenv").config();
const collections = require("./constants");

//import serviceAccount from json file
const serviceAccount = require(process.env
  .DESTINATION_FIREBASE_SERVICE_ACCOUNT);

const firestore = initializeFirebaseApp(serviceAccount);

const options = {
  autoParseDates: true,
  geos: ["location", "locations"],
  refs: ["refKey"],
};

collections.forEach((collection) => {
  restore(firestore, `backup/${collection}.json`, options).then(() =>
    console.log(`${collection} done`)
  );
});
