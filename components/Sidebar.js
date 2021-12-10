import React from "react";
import Image from "next/image";
import SideBarLink from "./SideBarLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 p-0 xl:ml-24">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SideBarLink text="Home" Icon={HomeIcon} active />
        <SideBarLink text="Explore" Icon={HashtagIcon} />
        <SideBarLink text="Notifications" Icon={BellIcon} />
        <SideBarLink text="Messages" Icon={InboxIcon} />
        <SideBarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SideBarLink text="Lists" Icon={ClipboardListIcon} />
        <SideBarLink text="Profile" Icon={UserIcon} />
        <SideBarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold hover:bg-[#1a8cd8]">
        Tweet
      </button>
      <div className="text-[#d9d9d9] flex items-center justify-center mt-auto linkBtn xl:ml-auto">
        <img
          src={session.user.image}
          alt={`${session.user.name}`}
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#6e767d]">@{session.user.tag}</p>
        </div>
        <LogoutIcon className="h-5 hidden xl:inline ml-10" onClick={signOut} />
      </div>
    </div>
  );
};

export default Sidebar;
