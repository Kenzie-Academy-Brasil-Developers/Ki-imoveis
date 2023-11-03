import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDataBaseatt1698791469106 implements MigrationInterface {
    name = 'CreateDataBaseatt1698791469106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
