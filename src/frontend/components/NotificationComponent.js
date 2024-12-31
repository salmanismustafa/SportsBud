// This file contains the NotificationComponent for displaying notifications to users about upcoming games.

import React, { useEffect, useState } from 'react';

const NotificationComponent = ({ notifications }) => {
    const [visibleNotifications, setVisibleNotifications] = useState([]);

    useEffect(() => {
        if (notifications.length > 0) {
            setVisibleNotifications(notifications);
        }
    }, [notifications]);

    return (
        <div className="notification-container">
            {visibleNotifications.length > 0 ? (
                visibleNotifications.map((notification, index) => (
                    <div key={index} className="notification">
                        {notification}
                    </div>
                ))
            ) : (
                <div className="notification">No upcoming games.</div>
            )}
        </div>
    );
};

export default NotificationComponent;