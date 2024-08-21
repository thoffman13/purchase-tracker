-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "measurementUnit" TEXT,
ADD COLUMN     "volume" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "userName" DROP NOT NULL;
