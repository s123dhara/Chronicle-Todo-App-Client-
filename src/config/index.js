// Application Configuration
const config = {
  // App Info
  app: {
    name: 'Chronicle',
    version: '1.0.0',
    description: 'Task Manager Application',
    author: 'Chronicle Team',
  },

  // API Configuration
  api: {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1',
    timeout: 30000, // 30 seconds
  },

  // Auth Configuration
  auth: {
    tokenKey: 'chronicle-access-token',
    refreshTokenKey: 'chronicle-refresh-token',
    userKey: 'chronicle-user',
  },

  // Storage Keys
  storage: {
    theme: 'chronicle-theme',
    tasks: 'chronicle-tasks',
  },

  // Theme Configuration
  theme: {
    default: 'dark',
    options: ['dark', 'light'],
  },

  // Pagination
  pagination: {
    defaultLimit: 50,
    maxLimit: 100,
  },

  // Task Configuration
  task: {
    categories: ['Work', 'Personal', 'Health', 'Learning', 'Finance', 'Other'],
    priorities: ['low', 'medium', 'high'],
    defaultDuration: 30, // minutes
    minDuration: 5,
    maxDuration: 480,
  },

  // Date/Time Format
  dateFormat: {
    display: 'MMM d, yyyy',
    input: 'yyyy-MM-dd',
    time: 'HH:mm',
    full: 'EEEE, MMMM d, yyyy',
  },

  // Environment
  env: {
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
    mode: import.meta.env.MODE,
  },
};

export default config;
