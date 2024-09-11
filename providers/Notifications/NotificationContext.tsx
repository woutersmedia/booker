"use client";

import { createContext, useContext, ReactNode } from "react";
import { NotificationsContainer } from "@/containers/Notifications";
import { NotificationType } from "@/types/Notications";
import { useNotification } from "@/hooks/useNotification";

interface NotificationContextType {
  notifications: NotificationType[];
  addNotification: (type: "info" | "error" | "success", title: string, text: string) => void;
  removeNotification: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationsProvider = ({ children }: NotificationProviderProps) => {
  const { notifications, addNotification, removeNotification } = useNotification();
  
  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
      <NotificationsContainer notifications={notifications} />
    </NotificationContext.Provider>
  );
};

export const useNotifications = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotifications must be used within a NotificationProvider");
  }
  return context;
};

export { NotificationContext };