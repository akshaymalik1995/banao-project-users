import React from "react";
import Image from "next/image";

interface UserProps {
  setSelectedUser: (user: any) => void;
  user: {
    id: string;
    avatar: string;
    profile: {
      firstName: string;
      lastName: string;
    };
    jobTitle: string;
  };
}

export default function User(props: UserProps) {
  const { user, setSelectedUser } = props;
  const [imgSrc, setImgSrc] = React.useState(user.avatar);
  return (
    <div
      className="shadow items-center hover:bg-blue-100 flex gap-8 p-4 rounded-lg"
      key={user.id}
    >
      <Image
        className="rounded-full"
        src={imgSrc}
        alt={user.profile.firstName}
        width={50}
        height={50}
        placeholder="blur"
        blurDataURL="/face.jpg"
        onError={() => setImgSrc("/face.jpg")}
      />
      <div className="flex  flex-col gap-1">
        <h2 className="text-xl font-bold">
          {user.profile.firstName} {user.profile.lastName}
        </h2>
        <p className="text-sm text-gray-500">{user.jobTitle}</p>
        <p
          onClick={() => setSelectedUser({ ...user, avatar: imgSrc })}
          className="text-blue-500 hover:underline text-sm cursor-pointer "
        >
          Other Info...
        </p>
      </div>
    </div>
  );
}
