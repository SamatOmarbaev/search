import { Users } from "../types";


export async function fetchApiUsers(query: string): Promise<Users> {
  try {
    const response = await fetch(`https://dummyjson.com/users/search?q=${query}`);

    if (!response.ok) {
      throw new Error('Fetch fail');
    }
      
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {users: [], };
  }
}