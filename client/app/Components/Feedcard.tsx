import React, { useState, MutableRefObject } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRetweet } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdHeart, IoMdStats } from "react-icons/io";
import { FiShare } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa6";
import { MdMoreHoriz } from "react-icons/md";
import { useClickAway } from "@uidotdev/usehooks";

const Feedcard = () => {
  const [isClick, setIsClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  }) as MutableRefObject<HTMLDivElement>;
  return (
    <div className="border-t border-gray-200 p-4 hover:bg-slate-50 ">
      <div className="grid gap-2 grid-cols-12">
        <div className="grid-span-1">
          <Image
            src={"https://avatars.githubusercontent.com/u/99068384?v=4"}
            alt="profile-avatar"
            width={100}
            height={100}
            className="rounded-full "
          />
        </div>
        <div className="col-span-11 flex gap-2 flex-col  relative ">
          <div className="flex items-center justify-between">
            <div className="flex gap-1 ">
              <Link href={"/user"} className="font-semibold ">
                Sujan Khatri
              </Link>
              <h4 className="text-slate-500">@sujansince2003</h4>
              <span className="text-slate-500">·</span>
              <h4 className="text-slate-500">10 july</h4>
            </div>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 hover:bg-blue-50  rounded-full "
            >
              <MdMoreHoriz className="text-xl" />
            </button>
            {isOpen && (
              <div ref={ref} className="absolute top-2 right-0 ">
                <div className="w-32 h-22 border-2 border-slate-600 rounded-2xl bg-violet-300 p-2">
                  <h1>Folloe</h1>
                  <h1>Folloe</h1>
                  <h1>Folloe</h1>
                </div>
              </div>
            )}
          </div>
          <p>
            Javascript is fun Javascript is fun Javascript is fun Javascript is
            fun Javascript is fun Javascript is fun Javascript is fun
          </p>
          <div className="flex gap-3 justify-between items-center">
            <div className="flex gap-9">
              <div className="flex items-center">
                <div className="p-2 hover:bg-blue-50  rounded-full ">
                  <FaRegComment className="text-slate-500 text-xl" />
                </div>
                <span>399k</span>
              </div>

              <div className="flex items-center">
                <div className="p-2 hover:bg-green-100 rounded-full">
                  <FaRetweet className="text-slate-500 text-xl" />
                </div>
                <span>39</span>
              </div>

              <div className="flex items-center">
                <div
                  onClick={() => setIsClick((prev) => !prev)}
                  className="p-2 hover:bg-green-100 rounded-full "
                >
                  {!isClick ? (
                    <IoMdHeartEmpty className="text-slate-500 text-xl" />
                  ) : (
                    <IoMdHeart className="text-red-500 text-xl" />
                  )}
                </div>
                <span>39</span>
              </div>

              <div className="flex items-center">
                <div className="p-2 hover:bg-green-100 rounded-full">
                  <IoMdStats className="text-slate-500 text-xl" />
                </div>
                <span>399k</span>
              </div>
            </div>
            <div className="flex gap-0">
              <div className="p-2 hover:bg-blue-50  rounded-full">
                {!isClick ? (
                  <FaRegBookmark className="text-slate-500" />
                ) : (
                  <FaBookmark className="text-blue-400" />
                )}
              </div>
              <div className="p-2 hover:bg-blue-50  rounded-full">
                <FiShare className="text-slate-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedcard;
