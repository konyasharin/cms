import { toast } from 'react-toastify';

import { Notification } from '@/shared/types';

export const notify = (notification: Notification) => {
  toast[notification.type](notification.message);
};
