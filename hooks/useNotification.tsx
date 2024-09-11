"use client";

import { useState, useCallback } from "react";
import { NotificationType } from "@/types/Notications";

export const useNotification = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const addNotification = useCallback((type: "info" | "error" | "success" = "info", title: string, text: string) => {
    setNotifications(prevNotifications => [
      ...prevNotifications,
      { id: Date.now(), type, text, title }
    ]);

    setTimeout(() => {
      removeNotification(Date.now());
    }, 5000);

  }, [setNotifications]);

  const removeNotification = useCallback((id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.id !== id)
    );
  }, [setNotifications]);

  return {
    notifications,
    addNotification,
    removeNotification
  };
};