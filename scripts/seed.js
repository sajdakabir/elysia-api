import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Seeding database...");
    await prisma.todo.createMany({
        data: [
            { title: "Todo 1", description: "Description 1" },
            { title: "Todo 2", description: "Description 2" },
            { title: "Todo 3", description: "Description 3" },
        ],
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });