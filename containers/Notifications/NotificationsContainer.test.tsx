import { render, screen } from "@testing-library/react";
import { NotificationsContainer } from "@/containers/Notifications/NotificationsContainer";
import { NotificationType } from "@/types/Notications";

describe("NotificationsContainer", () => {
  it("renders nothing when there are no notifications", () => {
    render(<NotificationsContainer notifications={[]} />);

    expect(screen.queryByTestId("notifications-container")).toBeNull();
  });

  it("renders notifications when there are notifications", () => {
    const notifications: NotificationType[] = [
      { id: 1, text: "Test notification 1", title: "Title 1", type: "info" },
      { id: 2, text: "Test notification 2", title: "Title 2", type: "error" }
    ];

    render(<NotificationsContainer notifications={notifications} />);

    expect(screen.getByTestId("notifications-container")).toBeInTheDocument();
    expect(screen.getByText("Test notification 1")).toBeInTheDocument();
    expect(screen.getByText("Test notification 2")).toBeInTheDocument();
  });

  it("renders the correct number of notifications", () => {
    const notifications: NotificationType[] = [
      { id: 1, text: "Test notification 1", title: "Title 1", type: "info" },
      { id: 2, text: "Test notification 2", title: "Title 2", type: "error" },
      { id: 3, text: "Test notification 3", title: "Title 3", type: "success" }
    ];

    render(<NotificationsContainer notifications={notifications} />);

    const notificationElements = screen.getAllByTestId("notification");

    expect(notificationElements).toHaveLength(3);
  });
});