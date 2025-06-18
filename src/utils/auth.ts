export type User = {
  email: string;
  password: string;
};

export const registerUser = (email: string, password: string) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]") as User[];
  const exists = users.some((u) => u.email === email);
  if (exists) {
    return { success: false, message: "User already exists" };
  }
  const newUser = { email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedInUser", JSON.stringify(newUser));
  return { success: true };
};

export const loginUser = (email: string, password: string) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]") as User[];
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return { success: false, message: "Invalid credentials" };
  }
  localStorage.setItem("loggedInUser", JSON.stringify(user));
  return { success: true };
};

export const logoutUser = () => {
  localStorage.removeItem("loggedInUser");
};

export const isAuthenticated = () => {
  return localStorage.getItem("loggedInUser") !== null;
};

export const getLoggedInUser = () => {
  try {
    const data = localStorage.getItem("loggedInUser");
    if (!data) return null;
    const user = JSON.parse(data);
    if (typeof user === "object" && user.email && user.password) {
      return user;
    }
    return null;
  } catch {
    return null;
  }
};
