/* eslint-disable require-jsdoc */
import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateMovieTable1606446199789 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    return await queryRunner.createTable(new Table({
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.dropTable('movies');
  }
}
