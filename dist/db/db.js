"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const typeorm_1 = require("typeorm");
// createConnection method will automatically read connection options
// from your ormconfig file or environment variables
const connect = async () => {
    const connection = await typeorm_1.createConnection();
};
exports.connect = connect;
//# sourceMappingURL=db.js.map