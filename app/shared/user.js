"use strict";
var User = (function () {
    function User(notificationFrequency, description, assets, locations, image) {
        if (notificationFrequency === void 0) { notificationFrequency = 0; }
        this.notificationFrequency = notificationFrequency;
        this.description = description;
        this.assets = assets;
        this.locations = locations;
        this.image = image;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map