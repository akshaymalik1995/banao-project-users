
export interface UserInterface {
    id: string;
    Bio: string;
    avatar: string;
    profile: {
        username: string;
        firstName: string;
        lastName: string;
        email: string;
    };
    jobTitle: string;
}

export interface UsersInterface {
    users: UserInterface[] | null;
    error: any | null;
}