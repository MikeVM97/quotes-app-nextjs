export const serverSideVariables = {
  db_host: process.env.DATABASE_HOST,
  db_username: process.env.DATABASE_USERNAME,
  db_password: process.env.DATABASE_PASSWORD,
  db_url: process.env.DATABASE_URL,
}

export const clientSideVariables = {
  db_host: process.env.NEXT_PUBLIC_DATABASE_HOST,
  db_username: process.env.NEXT_PUBLIC_DATABASE_USERNAME,
  db_password: process.env.NEXT_PUBLIC_DATABASE_PASSWORD,
  db_url: process.env.NEXT_PUBLIC_DATABASE_URL,
}
