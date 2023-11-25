import React from "react";

interface Props {
  data: string[];
}

const ProfileIcon: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex gap-2">
      {data.map((img, index) => (
        <img src={img} key={index} className="rounded-full" width={40} />
      ))}
    </div>
  );
};

export default ProfileIcon;
