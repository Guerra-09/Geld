# Geld - A Subscription notificator (or something like that)
Never lose track of your recurring payments again! Geld helps you monitor subscriptions, sends renewal reminders, and visualizes your spending.

# Table of Content: 📑
- [About the App: 📚](#about-the-app-)
- [Key Features ✨](#key-features-)
- [Screenshots: 📷](#screenshots-)
- [Technologies: ☕️ ⚛️ (at the moment)](#technologies-️-️-at-the-moment)
- [Setup: 💻](#setup-)
  - [**Prerequisites**](#prerequisites)
  - [**Installation** 💻](#installation-)
- [Approach: 🚶](#approach-)
- [Status: 📶](#status-)

# About the App: 📚
Geld is a mobile app designed to:
- ✅ Track active subscriptions (Streaming, SaaS, memberships).
- ✅ Send notifications before renewal dates.
- ✅ Visualize spending with charts and monthly summaries.
- ✅ Avoid "ghost charges" from forgotten free trials.

Perfect for budgeting-conscious users who want to optimize recurring expenses.

# Key Features ✨
- 📅 Renewal date reminders
- 📊 Spending analytics by category
- 🔔 Push notifications (Expo Notifications)
- 🎨 Dark/Light mode support

# Screenshots: 📷
**(IN PROGRESS)**

# Technologies: ☕️ ⚛️ (at the moment)
- Frontend: React Native (Expo)
- Navigation: @react-navigation
- Styling: Tailwind-like utility classes (or StyleSheet)
- State Management: React Context API
- Notifications: expo-notifications
- Backend: (Planned) Firebase/Firestore

# Setup: 💻
## **Prerequisites**  
- Node.js ≥18  
- Expo CLI (`npm install -g expo-cli`)  
- Android Studio/Xcode (para emuladores)  

## **Installation** 💻

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/geld.git
   cd geld```
  
2. Install dependencies::
  ```bash
  npm install
  ```

3. Start the development server:
  ```bash
  npm run start
  ```

  - Scan the QR code with your device camera and use the Expo Go app (Android/iOS)
- Or run on an emulator:
    - Press 'a' for Android
    - Press 'i' for iOS

# Approach: 🚶
- MVP First: Core subscription tracking before advanced features.
- Cross-Platform: Single codebase for iOS/Android using Expo.
- User-Centric: Focus on clear analytics and actionable alerts.

# Status: 📶
Work in Progress...🛠️
