import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

const useNotification = () => {
  const [api, contextHolder] = notification.useNotification();

  const showNotification = (type: NotificationType, message: string, description: string) => {
    api[type]({ message, description });
  };

  return { showNotification, contextHolder };
};

export default useNotification;