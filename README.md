# 📋 What Do I Have To Do?

<div align="center">
  <img src="public/images/logo.png" alt="What Do I Have To Do Logo" width="200" height="200">

![React](https://img.shields.io/badge/React-19.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.5-yellow.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-38B2AC.svg)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5.5.5-5A0FC8.svg)

  <p><em>A beautiful and intuitive task management application built with modern web technologies</em></p>
</div>

---

## ✨ Overview

**What Do I Have To Do?** is a sleek, responsive task management application designed to help you stay organized and productive. Built as a learning project to master React and TypeScript, this app provides a seamless experience for creating, managing, and tracking your to-do lists.

> 🚀 **Live Demo**: [View the app](https://wihtd.netlify.app/)

---

## 🌟 Features

### 🔐 Authentication System

- **Secure Registration & Login**: User-friendly forms with password hashing
- **Session Management**: "Remember me" functionality for persistent sessions
- **Protected Routes**: Private pages accessible only to authenticated users

### 📝 Task Management

- **Create Todo Lists**: Organize your tasks into categorized lists
- **Add/Edit Tasks**: Intuitive interface for managing individual tasks
- **Mark as Complete**: Click to toggle task completion status
- **Delete Lists**: Remove unwanted lists with confirmation

### 💾 Data Persistence

- **Local Storage**: All data stored securely in browser's local storage
- **No Backend Required**: Fully functional without external APIs

### 🎨 Modern UI/UX

- **Responsive Design**: Optimized for desktop and mobile devices
- **Beautiful Interface**: Built with Tailwind CSS and DaisyUI components
- **Smooth Animations**: Enhanced user experience with CSS transitions

---

## 🛠️ Tech Stack

### Frontend Framework

- **React 19.2.0** - Modern React with concurrent features
- **TypeScript 5.9.3** - Type-safe JavaScript development
- **Vite 7.2.5** - Lightning-fast build tool and dev server

### Styling & UI

- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **DaisyUI 5.5.5** - Component library for Tailwind CSS
- **FontAwesome & Heroicons** - Beautiful icon libraries

### Routing & State

- **React Router DOM 7.9.6** - Declarative routing for React
- **Context API** - State management with React contexts
- **Custom Hooks** - Reusable logic for authentication, modals, and services

### Security & Utilities

- **bcrypt/bcryptjs** - Password hashing for secure authentication
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Modern web browser** (Chrome recommended)

## 📖 Usage Guide

### First Time Setup

1. **Register**: Create your account on the registration page
2. **Login**: Sign in with your credentials
3. **Remember Me**: Check this option to stay logged in across sessions

### Creating Your First List

1. Navigate to the main dashboard
2. Click the **"Add List"** button
3. Enter a descriptive title for your list
4. Add at least one task
5. Click **"Save"** to create your list

### Managing Tasks

- **Complete Tasks**: Click on any task to mark it as done
- **Edit Lists**: Modify existing lists and their tasks
- **Delete Lists**: Remove lists you no longer need

### Best Practices

- Use descriptive list titles
- Break down complex tasks into smaller, actionable items
- Regularly review and update your task status
- Clear browser data will reset all your information

---

## 📁 Project Structure

```
what-do-i-have-to-do/
├── public/                 # Static assets
│   ├── images/            # App images and icons
│   └── _redirects         # Redirect rules
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── body/         # Main body component
│   │   ├── footer/       # Footer component
│   │   ├── header/       # Header component
│   │   ├── modals/       # Modal dialogs
│   │   ├── notes/        # Note/task components
│   │   └── top-nav-bar/  # Navigation bar
│   ├── contexts/         # React Context providers
│   │   ├── context-options/  # Context configuration
│   │   └── context-types/    # TypeScript types
│   ├── data/             # Data models and fake DB
│   │   ├── interfaces/   # TypeScript interfaces
│   │   └── models/       # Data transfer objects
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   │   ├── home/         # Landing page
│   │   ├── login/        # Authentication
│   │   ├── notes/        # Task management
│   │   └── register/     # User registration
│   ├── providers/        # Context providers
│   ├── routes/           # Routing configuration
│   ├── services/         # Business logic services
│   ├── styles/           # Global stylesheets
│   └── utils/            # Utility functions
├── index.html            # Main HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build configuration
└── eslint.config.js      # ESLint configuration
```

### Architecture Patterns

- **Component-Based**: Modular, reusable components
- **Context API**: Centralized state management
- **Custom Hooks**: Logic separation and reusability
- **TypeScript Interfaces**: Type safety throughout the app

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** and **DaisyUI** for beautiful styling
- **Vite** for the incredible development experience
- **FontAwesome** and **Heroicons** for the icon sets

---

<div align="center">
  <p><strong>Built with ❤️ using React & TypeScript</strong></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
