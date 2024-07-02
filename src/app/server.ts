import { UserInterface } from "@/types/users.type";

export async function fetchUsers() {

    const url = "https://602e7c2c4410730017c50b9d.mockapi.io/user"
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        let data = await response.json();
        console.log(data.length && data[0]);
        return {
            users: data as UserInterface[],
            error: null
        }
    } catch (error: any) {
        return {
            users: null,
            error: error.message
        }
    }
}
