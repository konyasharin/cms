import { useEffect, useState } from 'react';

import { Notification } from '@/shared/types';
import { notify } from '@/shared/utils';

interface ResponsiveNotification extends Notification {
  on: boolean;
}

export const useNotify = (externalNotifications: ResponsiveNotification[]) => {
  const [notifications, setNotifications] = useState<ResponsiveNotification[]>(
    Array.from(externalNotifications),
  );
  const [prevNotifications, setPrevNotifications] = useState<
    ResponsiveNotification[]
  >(Array.from(notifications));

  useEffect(() => {
    for (let i = 0; i < externalNotifications.length; i++) {
      const externalNotification = externalNotifications[i];
      const notification = notifications[i];
      if (
        externalNotification.on !== notification.on ||
        externalNotification.message !== notification.message ||
        externalNotification.type !== notification.type
      ) {
        setNotifications(Array.from(externalNotifications));
        break;
      }
    }
  }, [externalNotifications]);

  useEffect(() => {
    notifications.forEach((notification, index) => {
      if (notification.on !== prevNotifications[index].on && notification.on) {
        notify(notification);
      }
    });
    setPrevNotifications(Array.from(notifications));
  }, [notifications]);
};
