import React from "react";
import Image from "next/image";

interface UserDetailProps {
  user: {
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
  };
}

export default function UserDetail(props: UserDetailProps) {
  const { user } = props;

  return (
    <div className="shadow fixed items-center hover:bg-blue-100 flex gap-8 p-4 rounded-lg">
      <Image
        width={150}
        height={150}
        src={user.avatar}
        alt="user profile"
        className="rounded-full"
        placeholder="blur"
        blurDataURL="/face.jpg"
      />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">
            {user.profile.firstName} {user.profile.lastName}{" "}
          </h2>
          <span className="text-sm text-gray-500">
            @{user.profile.username}
          </span>
        </div>

        <p className="text-sm text-gray-500">{user.jobTitle}</p>
        <p>{user.Bio}</p>
        <p className="text-sm">
          <span>Contact</span> : <span>{user.profile.email}</span>
        </p>
      </div>
    </div>
  );
}
