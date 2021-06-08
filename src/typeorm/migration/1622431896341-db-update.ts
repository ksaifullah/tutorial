import {MigrationInterface, QueryRunner} from 'typeorm';

export class dbUpdate1622431896341 implements MigrationInterface {
  name = 'dbUpdate1622431896341'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "post" (
      "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
      "title" character varying(128) NOT NULL,
      "body" character varying NOT NULL,
      "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
      "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
      CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "post"');
  }

}
