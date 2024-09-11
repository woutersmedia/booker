import { Notification } from "@/components/Notification";
import { NotificationType } from "@/types/Notications";

interface NotificationsContainerProps {
  notifications: NotificationType[];
}

export const NotificationsContainer = ({ notifications }: NotificationsContainerProps) => {
  return (
    <div className="fixed top-0 right-0 w-96 space-y-4 p-4">
      {notifications.map((notification) => {
        return (
          <Notification
            key={notification.id}
            id={notification.id}
            text={notification.text}
            title={notification.title}
            type={notification.type}
          />
        );
      })}
    </div>
  );
};