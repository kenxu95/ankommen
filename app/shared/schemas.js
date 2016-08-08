"use strict";
var js_data_1 = require('js-data');
exports.user = new js_data_1.Schema({
    properties: {
        id: { type: 'string' },
        firstname: { type: 'string' },
        lastname: { type: 'string' },
        username: { type: 'string' },
        password: { type: 'string' },
        email: { type: 'string' },
        bio: { type: 'string' },
        contactFrequency: { type: 'number' }
    }
});
exports.userAsset = new js_data_1.Schema({
    properties: {
        id: { type: 'string' }
    }
});
exports.location = new js_data_1.Schema({
    properties: {
        id: { type: 'string' },
        longitude: { type: 'number' },
        latitude: { type: 'number' },
        radius: { type: 'number' }
    }
});
exports.task = new js_data_1.Schema({
    properties: {
        id: { type: 'string' },
        status: { type: 'number' },
        description: { type: 'string' }
    }
});
exports.image = new js_data_1.Schema({
    id: { type: 'number' },
    data: { type: 'string' } // ANY?
});
exports.timeRange = new js_data_1.Schema({
    starttime: { type: 'string' },
    endtime: { type: 'string' },
    dayOfWeek: { type: 'number' }
});
exports.asset = new js_data_1.Schema({
    name: { type: 'string' },
    description: { type: 'string' }
});
//# sourceMappingURL=schemas.js.map