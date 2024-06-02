import { createClient } from '@libsql/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  const url =
    process.env.TURSO_DATABASE_URL ||
    process.env.VITEST_TURSO_DATABASE_URL ||
    ''
  console.log('url', url)
  const authToken =
    process.env.TURSO_AUTH_TOKEN || process.env.VITEST_TURSO_AUTH_TOKEN
  console.log('authToken', authToken)
  const libsql = createClient({
    url,
    authToken,
  })
  const adapter = new PrismaLibSQL(libsql)

  return new PrismaClient({ adapter })
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
