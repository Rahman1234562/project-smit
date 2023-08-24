import fs from 'fs';
import path from 'path';
import { compare, hash } from 'bcrypt';

const filePath = path.join(process.cwd(), "src", "db", "user.json");

export const getAllUsers = () => {
    const users = fs.readFileSync(filePath);
    return JSON.parse(users);
};

export const getByEmail = (email) => {
    const users = getAllUsers();
    return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
};

export const verifyPassword = async (hashPassword, password) => {
    const users = getAllUsers();
    const isValid = await compare(password, hashPassword);
    return isValid;

}

export const registerUser =  async (email, password) => {
    const found = getByEmail(email);
    if (found) {
        throw new Error("User already exists");
    }

    const users = getAllUsers();
    const hashPassword = await hash(password, 12);
      users.push({
        id: users.length + 1,
        email,
        password: hashPassword
      });
      fs.writeFileSync(filePath, JSON.stringify(users));

};

