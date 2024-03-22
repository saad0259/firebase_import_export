# Firebase Import-Export

## Introduction

The `firebase_import_export` project is a Node.js application that facilitates the migration of data between two Firebase projects without the need to enable billing in either project. It allows users to download Firestore collections from one project as JSON files and then upload those JSON files as collections in another Firebase project. This makes it easier to migrate data and maintain separate Firebase projects for different purposes.

## Getting Started

To get started with the `firebase_import_export` project, follow these steps:

1.  Run `npm install` to install the required dependencies.
2.  Create a folder named **backup** in the project directory. This folder will be used to store the downloaded JSON files.
3.  [Create a Firebase Service Account](https://sharma-vikashkr.medium.com/firebase-how-to-setup-a-firebase-service-account-836a70bb6646) for the destination Firebase project.
4.  Place the Firebase service account credential files (JSON) in the project directory.
5.  Create an `.env` file and set the `SOURCE_FIREBASE_SERVICE_ACCOUNT` variable to the filename of the source service account credentials file.
6.  Go to `.env` file and set the `DESTINATION_FIREBASE_SERVICE_ACCOUNT` variable to the filename of the source service account credentials file.

## Exporting Firestore Collections

To download Firestore collections as JSON files, follow these steps:

1.  Edit the `collections` variable in `constants.js` to specify the collections you want to export from your Firestore database.
2.  Run `node export.js` in the project directory to export the specified Firestore collections as JSON files. The JSON files will be saved in the **backup** folder.

## Importing Firestore Collections

To upload JSON files in the **backup** folder as Firestore collections, follow these steps:

1.  Edit the `collections` variable in `constants.js` to specify the collections you want to import into your Firestore database.
2.  Run `node import.js` in the project directory to import the JSON files from the **backup** folder as collections in your Firestore database.

## Contact

For more information or assistance, please reach out to [saadshafiq259@gmail.com](mailto:saadshafiq259@gmail.com). Cheers! 😄
