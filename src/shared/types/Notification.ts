type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
  type: NotificationType;
  message: string;
}
