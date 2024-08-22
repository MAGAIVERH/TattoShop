-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tattoshop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phones" TEXT[],
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tattoshop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tattoservice" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "tattoshopId" TEXT NOT NULL,

    CONSTRAINT "Tattoservice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tattobooking" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tattobooking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tattoservice" ADD CONSTRAINT "Tattoservice_tattoshopId_fkey" FOREIGN KEY ("tattoshopId") REFERENCES "Tattoshop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tattobooking" ADD CONSTRAINT "Tattobooking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tattobooking" ADD CONSTRAINT "Tattobooking_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Tattoservice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
