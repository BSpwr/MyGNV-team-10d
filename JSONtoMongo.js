const fs = require('fs');
const util = require('util');
const mongoose = require('mongoose');
const Provider = require('./server/models/provider.model.js');
const config = require('./server/config/config.js');

// Requires 'data.json` to be in the same folder as this script

mongoose.connect(config.db.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const asyncFileRead = util.promisify(fs.readFile);

async function asyncSave(doc) {
  return doc.save();
}

async function dbPopulate() {
  // PURGE ALL PREVIOUS LISTINGS FIRST
  // THIS WILL DELETE OUR DATABASE TO REPOPULATE IT
  // !! DO NOT TOUCH IF UNSURE !!
  // Provider.deleteMany({}, () => {});

  // Begin repopulating DB
  let parsedJson = undefined;
  try {
    const readFile = await asyncFileRead('./data.json', 'utf8');
    parsedJson = JSON.parse(readFile);
  } catch (err) {
    const errStr = `[JSON Read/Parse]: ${err}`;
    console.log(errStr);
    throw errStr;
  }
  if (parsedJson['entries'] == undefined) {
    const errStr = `[JSON Read/Parse]: unexpected input`;
    console.log(errStr);
    throw errStr;
  }

  for (const x in parsedJson) {
    if (Object.prototype.hasOwnProperty.call(parsedJson, x)) {
      const docListing = new Provider();

      // Nasty JSON parser, goes 4 levels deep max
      for (const prop in parsedJson[x]) {
        if (
          Object.prototype.hasOwnProperty.call(parsedJson[x], prop) &&
          typeof parsedJson[x][prop] === 'object'
        ) {
          for (const innerProp in parsedJson[x][prop]) {
            if (
              Object.prototype.hasOwnProperty.call(
                parsedJson[x][prop],
                innerProp,
              ) &&
              typeof parsedJson[x][prop][innerProp] === 'object'
            ) {
              for (const innerPropA in parsedJson[x][prop][innerProp]) {
                if (
                  Object.prototype.hasOwnProperty.call(
                    parsedJson[x][prop][innerProp],
                    innerPropA,
                  ) &&
                  typeof parsedJson[x][prop][innerProp][innerPropA] === 'object'
                ) {
                  for (const innerPropB in parsedJson[x][prop][innerProp][
                    innerPropA
                  ]) {
                    if (
                      Object.prototype.hasOwnProperty.call(
                        parsedJson[x][prop][innerProp][innerPropA],
                        innerPropB,
                      )
                    ) {
                      docListing[prop][innerProp][innerPropA][innerPropB] =
                        parsedJson[x][prop][innerProp][innerPropA][innerPropB];
                    }
                  }
                } else {
                  docListing[prop][innerProp][innerPropA] =
                    parsedJson[x][prop][innerProp][innerPropA];
                }
              }
            } else {
              docListing[prop][innerProp] = parsedJson[x][prop][innerProp];
            }
          }
        } else {
          docListing[prop] = parsedJson[x][prop];
        }
      }
      let saveDoc = null;
      try {
        saveDoc = await asyncSave(docListing);
      } catch (err) {
        const errStr = `[DB]: ${err}`;
        console.log(errStr);
        throw errStr;
      }
      if (saveDoc != undefined) {
        console.log(`[DB]: Successfully Saved: ${saveDoc}`);
      }
    }
  }
  return mongoose.disconnect();
}

dbPopulate();
