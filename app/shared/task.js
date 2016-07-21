"use strict";
var Task = (function () {
    function Task(startTime, // TODO: FIX THIS SHIT
        endTime) {
        if (startTime === void 0) { startTime = new Date(); }
        if (endTime === void 0) { endTime = new Date(); }
        this.startTime = startTime;
        this.endTime = endTime;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map