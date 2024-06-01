/*
  Warnings:

  - Added the required column `card_type` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CardsType" AS ENUM ('visa', 'mastercard', 'amex', 'rupay', 'jcb', 'visa_electron');

-- AlterTable
ALTER TABLE "Cards" ADD COLUMN     "card_type" "CardsType" NOT NULL;
