"use strict";
var js_data_1 = require('js-data');
var js_data_http_1 = require('js-data-http');
var schemas = require('./schemas');
var relations = require('./relations');
// TODO: FIX THIS
var convertToDate = function (record) {
    if (typeof record.starttime === 'string') {
        record.startime = new Date(record.starttime);
    }
    if (typeof record.endtime === 'string') {
        record.endtime = new Date(record.endtime);
    }
};
exports.adapter = new js_data_http_1.HttpAdapter({
    basePath: '/api' /* TODO: WHERE DOES OUR API SIT */
});
exports.store = new js_data_1.DataStore({
    mapperDefaults: {}
});
// //TODO: Make this work
exports.store.registerAdapter('http', exports.adapter, { default: true });
// Define mapper for User
exports.store.defineMapper('user', {
    endpoint: 'users',
    schema: schemas.user,
    relations: relations.user
});
//# sourceMappingURL=store.js.map