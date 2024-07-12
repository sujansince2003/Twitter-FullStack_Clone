"use client";
import React from "react";
import { FaRegEnvelope, FaRegBell } from "react-icons/fa";
import { IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import { FaRegUser, FaRegBookmark, FaXTwitter } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import { MdMoreHoriz } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Feedcard } from "./Components";

export default function Home() {
  interface SideItemsInterface {
    title: string;
    icon: React.ReactNode;
    slug: string;
  }

  const sideBarItems: SideItemsInterface[] = [
    {
      title: "Home",
      icon: <IoHomeOutline />,
      slug: "/",
    },
    {
      title: "Explore",
      icon: <IoSearchOutline />,
      slug: "/explore",
    },
    {
      title: "Notifications",
      icon: <FaRegBell />,
      slug: "/notifications",
    },
    {
      title: "Messages",
      icon: <FaRegEnvelope />,
      slug: "/messages",
    },
    {
      title: "Bookmarks",
      icon: <FaRegBookmark />,
      slug: "/bookmarks",
    },
    {
      title: "Profile",
      icon: <FaRegUser />,
      slug: "/profile",
    },
    {
      title: "More",
      icon: <CgMoreO />,
      slug: "/more",
    },
  ];

  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="grid grid-cols-12 h-screen  border-2 border-black mx-28 ">
      <div className="col-span-3 p-4 gap-2 flex flex-col justify-start border-r-2 border-r-[#EFF3F4] ">
        <div className="text-4xl  w-fit rounded-full p-2 hover:bg-gray-200">
          <FaXTwitter />
        </div>
        <div>
          <ul>
            {sideBarItems.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.slug}
                  className="flex gap-4 items-center text-2xl py-3 px-4 hover:bg-gray-200 rounded-full w-fit "
                >
                  <span className="font-bold">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button className="text-xl font-semibold py-2 w-full rounded-full bg-blue-500 text-white">
          <span>Post</span>
        </button>
      </div>
      <div className="col-span-5 border-r-2 border-r-[#EFF3F4] h-screen overflow-y-scroll no-scrollbar scroll-m-0 ">
        <Feedcard />
        <Feedcard />
        <Feedcard />
        <Feedcard />
        <Feedcard />
        <Feedcard />
        <Feedcard />
        <Feedcard />
        <Feedcard />
      </div>
      <div className="col-span-4">fd</div>
    </div>
  );
}
