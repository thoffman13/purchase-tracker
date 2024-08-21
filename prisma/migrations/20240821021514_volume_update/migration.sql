/*
  Warnings:

  - Made the column `measurementUnit` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `volume` on table `Transaction` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "measurementUnit" SET NOT NULL,
ALTER COLUMN "volume" SET NOT NULL;
