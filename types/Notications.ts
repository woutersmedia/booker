export type NotificationType = {
  id: number;
  type: "info" | "error" | "success";
  text: string;
  title: string;
}