const { DataStore } = require("notarealdb");

const store = new DataStore('./data');

module.exports = {
    allData: store.collection('allDataOfSite'),
    
};
