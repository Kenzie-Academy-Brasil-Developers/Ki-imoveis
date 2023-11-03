import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDataBaseatt1698791604946 implements MigrationInterface {
    name = 'CreateDataBaseatt1698791604946'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "deleteAt" TO "deletedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "deletedAt" TO "deleteAt"`);
    }

}
