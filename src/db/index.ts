export interface User {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;
}

export const users: User[] = [
  {
    username: 'john_doe',
    email: 'john.doe@example.com',
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
    age: 28,
  },
  {
    username: 'jane_smith',
    email: 'jane.smith@example.com',
    password: 'password123',
    firstName: 'Jane',
    lastName: 'Smith',
    age: 32,
  },
  {
    username: 'alice_jones',
    email: 'alice.jones@example.com',
    password: 'password123',
    firstName: 'Alice',
    lastName: 'Jones',
    age: 24,
  },
  {
    username: 'bob_brown',
    email: 'bob.brown@example.com',
    password: 'password123',
    firstName: 'Bob',
    lastName: 'Brown',
    age: 45,
  },
  {
    username: 'charlie_davis',
    email: 'charlie.davis@example.com',
    password: 'password123',
    firstName: 'Charlie',
    lastName: 'Davis',
    age: 30,
  },
  {
    username: 'diana_evans',
    email: 'diana.evans@example.com',
    password: 'password123',
    firstName: 'Diana',
    lastName: 'Evans',
    age: 27,
  },
  {
    username: 'frank_garcia',
    email: 'frank.garcia@example.com',
    password: 'password123',
    firstName: 'Frank',
    lastName: 'Garcia',
    age: 35,
  },
  {
    username: 'grace_harris',
    email: 'grace.harris@example.com',
    password: 'password123',
    firstName: 'Grace',
    lastName: 'Harris',
    age: 29,
  },
  {
    username: 'henry_lee',
    email: 'henry.lee@example.com',
    password: 'password123',
    firstName: 'Henry',
    lastName: 'Lee',
    age: 40,
  },
  {
    username: 'isabel_martin',
    email: 'isabel.martin@example.com',
    password: 'password123',
    firstName: 'Isabel',
    lastName: 'Martin',
    age: 22,
  },
];

export default users;
