/*
  Warnings:

  - You are about to drop the column `purchase` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `text` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "purchase",
ADD COLUMN     "text" TEXT NOT NULL;
