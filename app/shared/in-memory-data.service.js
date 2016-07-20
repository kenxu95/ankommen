"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var tasks = [
            {
                id: 1,
                startTime: new Date(2017, 1),
                endTime: new Date(2017, 2),
                description: "Bonfire",
                assets: ["fire making", "praying", "swimming"]
            },
            {
                id: 2,
                startTime: new Date(2016, 7, 19),
                endTime: new Date(2016, 7, 21),
                description: "Furniture moving",
                assets: ["lifting", "vehicle", "Jesus"]
            },
            {
                id: 3,
                startTime: new Date(2017, 4),
                endTime: new Date(2017, 5),
                description: "Furniture",
                assets: ["laughing", "getting hurt", "lifting"]
            },
            {
                id: 4,
                startTime: new Date(2017, 1),
                endTime: new Date(2017, 2),
                description: "Drinking",
                assets: ["low tolerance", "laughing", "time"]
            },
            {
                id: 5,
                startTime: new Date(2015, 1),
                endTime: new Date(2015, 2),
                description: "High School Graduation",
                assets: ["vehicle"]
            },
            {
                id: 6,
                startTime: new Date(2017, 8),
                endTime: new Date(2017, 9),
                description: "Returning to school",
                assets: ["vehicle", "lifting", "running"]
            },
            {
                id: 7,
                startTime: new Date(2018, 1),
                endTime: new Date(2018, 2),
                description: "Waterskiing",
                assets: ["lifting", "boating"]
            },
            {
                id: 8,
                startTime: new Date(2019, 8),
                endTime: new Date(2019, 10),
                description: "Bonfire",
                assets: ["vehicle", "school"]
            },
            {
                id: 9,
                startTime: new Date(2018, 2),
                endTime: new Date(2018, 3),
                description: "Card Gathering",
                assets: ["board games", "enthusiasm"]
            },
            {
                id: 10,
                startTime: new Date(2018, 3),
                endTime: new Date(2018, 5),
                description: "Theater Play",
                assets: ["listening", "enthusiasm"]
            }
        ];
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
// export class InMemoryDataService {
//   createDb() {
//     let heroes = [
//       { 
//         username: "PandaMan",
//         password: "pandapassword",
//         firstname: "Peter",
//         lastname: "George",
//         email: "pandaman@gmail.com",
//         notificationFrequency: 1
//       },
//       { 
//         username: "KoalaMan",
//         password: "koalapassword",
//         firstname: "Euco",
//         lastname: "Calypus",
//         email: "koalaman@gmail.com",
//         notificationFrequency: 2
//       },
//       { 
//         username: "Kingman",
//         password: "kingpassword",
//         firstname: "Kingly",
//         lastname: "Kinger",
//         email: "kingman@gmail.com",
//         notificationFrequency: 0
//       }
//     ];
//     return { heroes };
//   }
// } 
//# sourceMappingURL=in-memory-data.service.js.map