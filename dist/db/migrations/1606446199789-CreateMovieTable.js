"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovieTable1606446199789 = void 0;
/* eslint-disable require-jsdoc */
const typeorm_1 = require("typeorm");
class CreateMovieTable1606446199789 {
    async up(queryRunner) {
        return await queryRunner.createTable(new typeorm_1.Table({
            name: 'movies',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'plot_summary',
                    type: 'text',
                    isNullable: false,
                },
                {
                    name: 'duration',
                    type: 'integer',
                    isNullable: false,
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        return await queryRunner.dropTable('movies');
    }
}
exports.CreateMovieTable1606446199789 = CreateMovieTable1606446199789;
//# sourceMappingURL=1606446199789-CreateMovieTable.js.map