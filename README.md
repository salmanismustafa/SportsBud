# SportsBud

SportsBud is a conversational AI sports application designed to provide users with personalized sports preferences, game schedules, updates, and notifications. The application leverages the GPT-4 API for conversational responses and integrates with a sports API for real-time data.

## Features

- User authentication for personalized sports preferences
- Integration with a sports API for game schedules and updates
- Conversational responses powered by the GPT-4 API
- Notification functionality for upcoming games
- Clean and minimal frontend interface for user interactions

## User Authentication

The SportsBud application includes a robust user authentication system that allows users to register and log in securely. The authentication features include:

- **Registration**: New users can create an account by providing their details, which are validated and stored in the database.
- **Login**: Existing users can log in using their credentials. Upon successful login, a session token is generated for secure access.
- **User Management**: The application manages user sessions and provides user-related operations.

## Project Structure

```
SportsBud
├── src
│   ├── actions
│   │   └── gpt4Action.js
│   ├── auth
│   │   ├── auth.js
│   │   ├── login.js
│   │   ├── register.js
│   │   └── user.js
│   ├── api
│   │   └── sportsApi.js
│   ├── notifications
│   │   └── notifications.js
│   ├── frontend
│   │   ├── components
│   │   │   └── NotificationComponent.js
│   │   ├── pages
│   │   │   ├── HomePage.js
│   │   │   ├── PreferencesPage.js
│   │   │   ├── LoginPage.js
│   │   │   └── RegisterPage.js
│   │   └── App.js
│   ├── backend
│   │   └── gpt4Response.js
│   └── types
│       └── index.js
├── package.json
├── wasp.config.js
└── README.md
```

## Setup Instructions

1. Clone the repository.
2. Navigate to the project directory.
3. Install the required dependencies using `npm install`.
4. Configure the database settings in `wasp.config.js`.
5. Start the application using `npm start`.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.