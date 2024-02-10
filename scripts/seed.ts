const { PrismaClient } = require('@prisma/client');

const database = new PrismaClient();

const main = async () => {
  try {
    await database.category.createMany({
      data: [
        { name: 'Computer Science' },
        { name: 'Music' },
        { name: 'Fitness' },
        { name: 'Photography' },
        { name: 'Accounting' },
        { name: 'Engineering' },
        { name: 'Filming' },
      ],
    });
    console.log('Categories seeded');
  } catch (error) {
    console.log('Error of seeding the database categories');
  } finally {
    await database.$disconnect();
  }
};

main();
