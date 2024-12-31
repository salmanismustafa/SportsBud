module.exports = {
  // Wasp configuration for SportsBud project
  routes: {
    // Define routes for user authentication
    login: {
      path: '/login',
      component: 'LoginPage',
    },
    register: {
      path: '/register',
      component: 'RegisterPage',
    },
    home: {
      path: '/',
      component: 'HomePage',
    },
    preferences: {
      path: '/preferences',
      component: 'PreferencesPage',
    },
  },
  database: {
    // Database settings for user authentication
    type: 'postgres',
    url: process.env.DATABASE_URL,
  },
  auth: {
    // Authentication settings
    jwtSecret: process.env.JWT_SECRET,
    tokenExpiration: '1h',
  },
};