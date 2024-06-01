-- CreateTable
CREATE TABLE "Cards" (
    "id" SERIAL NOT NULL,
    "card_number" TEXT NOT NULL,
    "card_name" TEXT NOT NULL,
    "card_expiry" TEXT NOT NULL,
    "card_cvc" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
