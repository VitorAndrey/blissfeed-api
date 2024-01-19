// import { Prisma, User as PrismaUser } from "@prisma/client";

// export interface User implements PrismaUser;
// export interface CreateUser implements Prisma.UserCreateInput;

export interface User {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  created_at: Date;
}

export interface CreateUser {
  id?: string | undefined;
  name: string;
  email: string;
  password_hash: string;
  created_at?: string | Date | undefined;
}
