"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    ssl: require
});
client.connect();
const IoTHubTrigger = function (context, IoTHubMessages) {
    return __awaiter(this, void 0, void 0, function* () {
        context.log(`Eventhub trigger function called for message array: ${IoTHubMessages}`);
        IoTHubMessages.forEach(message => {
            context.log(`Processed message: ${message}`);
            context.log(message.count);
            let query = 'INSERT INTO revpidata (deviceid, temperature) VALUES (1,+' + message.count + ')';
            client.query(query);
            client.query("COMMIT");
        });
    });
};
exports.default = IoTHubTrigger;
//# sourceMappingURL=index.js.map