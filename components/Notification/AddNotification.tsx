"use client";

import { useNotifications } from "@/providers/Notifications";
import { useSession } from "next-auth/react";
import { useDictionary } from "@/providers/Dictionary";

export const AddNotification = () => {
  const { data: session } = useSession();
  const { addNotification } = useNotifications();
  const dict = useDictionary();

  if (session) {
    const handleClick = (type: "success" | "info" | "error") => {
      console.log("handleClick");
      addNotification(
        type,
        `This is a ${type} notification!`,
        "With the designated content",
      );
    };

    return (
      <div className="container py-4">
        <div className="flex gap-2">
          <button
            onClick={() => handleClick("success")}
            className="p-2 bg-green-500 text-white rounded"
          >
            {dict.notifications.show_succes_notification}
          </button>
          <button
            onClick={() => handleClick("info")}
            className="p-2 bg-blue-500 text-white rounded"
          >
            {dict.notifications.show_info_notification}
          </button>
          <button
            onClick={() => handleClick("error")}
            className="p-2 bg-red-500 text-white rounded"
          >
            {dict.notifications.show_error_notification}
          </button>
        </div>
      </div>
    );
  }

  return null;
};
