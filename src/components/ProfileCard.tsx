import React from 'react';
import ProfilePic from '../assets/ProfilePic.jpg';
import Image from 'next/image';

const ProfileCard: React.FC = () => {
  return (
    <div className="flex items-center p-2">
      <div className="w-12 h-12 rounded-2xl overflow-hidden">
        <Image src={ProfilePic} alt="profile picture" className="w-full h-full object-cover" />
      </div>
      <div className="ml-3 flex flex-col">
        <h2 className="text-md font-semibold pb-1">Marco</h2>
        <p className="text-sm text-gray-500">Welcome !</p>
      </div>
    </div>
  );
};

export default ProfileCard;
