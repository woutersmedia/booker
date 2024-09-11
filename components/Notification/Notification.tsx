"use client";

import { useEffect, useState } from "react";
import { useNotification } from "@/hooks/useNotification";
import { FaTimesCircle, FaRegCheckCircle, FaInfoCircle, FaRegBell } from "react-icons/fa";
import { NotificationType } from "@/types/Notications";

export const Notification = ({ type, text, title, id }: NotificationType) => {
  const { removeNotification } = useNotification();
  const [active, setActive] = useState(true);
  const [visible, setVisible] = useState(true);

  let backgroundColor = "";
  let borderColor = "";
  let icon;

  switch (type) {
    case "error":
      backgroundColor = "bg-red-200";
      borderColor = "border-red-800";
      icon = <FaTimesCircle />;
      break;
    case "success":
      backgroundColor = "bg-green-200";
      borderColor = "border-green-800";
      icon = <FaRegCheckCircle />;
      break;
    case "info":
      backgroundColor = "bg-blue-200";
      borderColor = "border-blue-800";
      icon = <FaInfoCircle />;
      break;
    default:
      backgroundColor = "bg-gray-200";
      borderColor = "border-gray-800";
      icon = <FaRegBell />;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
      setTimeout(() => {
        setVisible(false);
        removeNotification(id);
      }, 300);
    }, 5000);

    return () => clearTimeout(timer);
  }, [title, text, type, id, removeNotification]);

  if(!visible) return null;

  return (
    <div className={`relative ${active ? "right-0" : "-right-96"} transition-all`} data-testid="notification">
      <div className={`flex rounded-lg h-24 ${backgroundColor} text-gray-900 shadow-xl border-l-8 ${borderColor}`}>
        <div className="flex flex-row gap-5 justify-center items-center px-5">
          <div className="my-auto">
            {icon}
          </div>
          <div>
            <div className="font-bold text-lg">{title}</div>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};