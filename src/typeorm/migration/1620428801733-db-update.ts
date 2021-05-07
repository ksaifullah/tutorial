import {MigrationInterface, QueryRunner} from 'typeorm';

export class dbUpdate1620428801733 implements MigrationInterface {
    name = 'dbUpdate1620428801733'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `CREATE TABLE "user" (
          "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
          "firstName" character varying(64) NOT NULL,
          "lastName" character varying(64),
          "email" character varying(64) NOT NULL,
          "isActive" boolean NOT NULL DEFAULT true,
          "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
          "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
          CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
        )`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE "user"');
    }

}
