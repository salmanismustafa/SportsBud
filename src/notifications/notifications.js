// This file handles notifications for upcoming games and user alerts.

import { useEffect, useState } from 'react';

const NotificationService = {
    notifications: [],

    addNotification(notification) {
        this.notifications.push(notification);
        this.notifyListeners();
    },

    notifyListeners() {
        // Logic to notify listeners about new notifications
    },

    getNotifications() {
        return this.notifications;
    },

    clearNotifications() {
        this.notifications = [];
    }
};

export const useNotifications = () => {
    const [notifications, setNotifications] = useState(NotificationService.getNotifications());

    useEffect(() => {
        const notifyListener = () => setNotifications(NotificationService.getNotifications());
        NotificationService.notifyListeners = notifyListener;

        return () => {
            NotificationService.notifyListeners = () => {};
        };
    }, []);

    return {
        notifications,
        addNotification: NotificationService.addNotification,
        clearNotifications: NotificationService.clearNotifications
    };
};