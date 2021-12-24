import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Bell, Envelope, CaretDownFill } from "react-bootstrap-icons";
import profilePicture from "./assets/images/user-photo.jpg";

const TopNav = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full p-4 flex justify-between sm:p-8 sm:pt-6 sm:pb-0">
      <div>
        <p className="text-white font-semibold text-3xl pb-1">
          <span className="hidden sm:inline-block">Account</span> Overview
        </p>
        <p className="text-sm font-medium text-neutral-400">
          {format(time, "MMMM, dd h:mm:ss aa")}
        </p>
      </div>
      <div className="flex items-center h-6 pt-2">
        <div className="mr-6 relative">
          <div className="h-2 w-2 rounded-full bg-violet-400 absolute top-0 right-0 shadow-notification-shadow"></div>
          <Bell size={20} className="text-neutral-400" />
        </div>
        <div className="mr-5 relative pr-1">
          <div className="h-2 w-2 rounded-full bg-fuchsia-400 absolute top-0 right-0 shadow-notification-shadow"></div>
          <Envelope size={20} className="text-neutral-400" />
        </div>
        <img
          src={profilePicture}
          alt="profile picture"
          className="w-6 h-6 rounded-full mr-2"
        />
        <div className="flex items-center">
          <p className="text-neutral-400 text-sm mr-1 hidden sm:block">
            My Account
          </p>
          <CaretDownFill className="text-neutral-400 text-xs" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
