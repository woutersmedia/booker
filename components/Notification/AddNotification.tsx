"use client";

import { useNotifications } from "@/providers/Notifications";

export const AddNotification = () => {
  const { addNotification } = useNotifications();

  const handleClick = (type: "success" | "info" | "error") => {
    console.log("handleClick");
    addNotification(type, `This is a ${type} notification!`, "With the designated content");
  };

  return (
    <div className="container py-4">
      <div className="flex gap-2">
        <button onClick={() => handleClick("success")} className="p-2 bg-green-500 text-white rounded">
          Show Success Notification
        </button>
        <button onClick={() => handleClick("info")} className="p-2 bg-blue-500 text-white rounded">
          Show Info Notification
        </button>
        <button onClick={() => handleClick("error")} className="p-2 bg-red-500 text-white rounded">
          Show Error Notification
        </button>
      </div>
    </div>
  );
};