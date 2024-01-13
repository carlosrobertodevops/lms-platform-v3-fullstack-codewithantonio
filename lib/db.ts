import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: undefined | PrismaClient;
}

export const db = globalThis.prisma ?? new PrismaClient();
// Оператор ?? означает что функция new PrismaClient() выполняется по дефолту в случае если globalThis.prisma будет null или Undefined. This allows hot reloading in development to reuse the existing client instead of creating a new one each time.

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
// Если мы находимся в режиме разработки, то мы записываем объект prisma в глобальный объект globalThis.prisma
