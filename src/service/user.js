import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";

const filePath = path.join(process.cwd(), "src", "db", "user.json");

export const getAllUser = () => {
  const users = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(users);
};

export const getByEmail = (email) => {
  const users = getAllUser();
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
};
export const verifyPassword = async (password, hashPassword) => {
  const isValid = await bcrypt.compare(password, hashPassword);
  return isValid;

}

export const registerUser = async (email, password) => {
  const users = getAllUser();
  const found = getByEmail(email);
  if (found) {
    throw new Error("user exist");
  }

  const hashPassword = await bcrypt.hash(password, 12);

  users.push({
    id: users.length + 1,
    email,
    password: hashPassword
  });

  fs.writeFileSync(filePath, JSON.stringify(users));
  return { email };
};
