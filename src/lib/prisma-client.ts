import { createClient } from '@libsql/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient
}

const prismaClientSingleton = () => {
  const url =
    process.env.TURSO_DATABASE_URL ||
    process.env.VITEST_TURSO_DATABASE_URL ||
    ''
  const authToken =
    process.env.TURSO_AUTH_TOKEN || process.env.VITEST_TURSO_AUTH_TOKEN
  const libsql = createClient({
    url,
    authToken,
  })
  const adapter = new PrismaLibSQL(libsql)

  return new PrismaClient({ adapter })
}

const prisma = global.prisma || prismaClientSingleton()

export default prisma
