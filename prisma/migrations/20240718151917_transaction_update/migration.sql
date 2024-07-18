/*
  Warnings:

  - You are about to drop the column `amount` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `price` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchase` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "amount",
DROP COLUMN "text",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "purchase" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
