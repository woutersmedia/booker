"use client";

import { useNotifications } from "@/providers/Notifications";
import { useSession } from "next-auth/react";

export const AddNotification = () => {
  const { data: session } = useSession();
  const { addNotification } = useNotifications();

  if (session) {
    const handleClick = (type: "success" | "info" | "error") => {
      console.log("handleClick");
      addNotification(type, `This is a ${type} notification!`, "With the designated content");
    };

    return (
      <div className="container py-4">
        <div className="flex gap-2">
          <button onClick={() => handleClick("success")} className="p-2 bg-green-500 text-white rounded-xs">
            Show Success Notification
          </button>
          <button onClick={() => handleClick("info")} className="p-2 bg-blue-500 text-white rounded-xs">
            Show Info Notification
          </button>
          <button onClick={() => handleClick("error")} className="p-2 bg-red-500 text-white rounded-xs">
            Show Error Notification
          </button>
        </div>
      </div>
    );
  }

  return null;
};