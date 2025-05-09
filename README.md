# Pomodoro App 🕒
This is a Pomodoro application built with **React** and **TypeScript**, focused on productivity. It allows users to manage their time using focus cycles, view session history in a table, and enjoy a smooth and precise experience thanks to the use of **Web Workers**.

## 🚀 Technologies Used

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [React Router](https://reactrouter.com/)
* [React Hook Form](https://react-hook-form.com/)
* [Context API](https://reactjs.org/docs/context.html)
* [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
* [Vite](https://vitejs.dev/) (or CRA, depending on your setup)

## 📋 Features

* Start, pause, and reset Pomodoro cycles.
* Configurable cycles (focus time, short and long breaks).
* Session history displayed in a table.
* High-precision timer with Web Worker (prevents lags and delays).
* Form validation using React Hook Form.
* Page navigation with React Router.
* Global state management using Context API.

## 🖥️ Screens

* **Timer (Home):** Start Pomodoro cycles.
* **History:** Table displaying past sessions with a reset history button.
* **About Pomodoro:** Explanation about the Pomodoro technique.
* **Not Found:** Page not found.

  
![image](https://github.com/user-attachments/assets/6ba8958a-ce3d-4292-a161-ebe65b48e72e)
![image](https://github.com/user-attachments/assets/737ee6d7-e354-4345-98e4-de0db86fec6c)
![image](https://github.com/user-attachments/assets/24c1be1b-7858-4440-a6e5-0c3fe2a8ef04)
![image](https://github.com/user-attachments/assets/547df526-5bd0-47c3-9012-b00e251ea2fe)
![image](https://github.com/user-attachments/assets/0207c9ed-9505-42e9-9aa0-66770994e33f)

## 🧠 Pomodoro Cycle Logic

The Pomodoro Technique is a simple method to improve focus and productivity. Here's how it works:

1. Choose a task you want to work on—like reading, studying, or solving a complex problem.
2. Set your focus time, short break, and long break durations.
3. When you start, work on the task with full focus during the set focus time.
4. When the timer rings, take a real short break.
5. After four periods of focus the last break will be a long break.

### How full cycles work:

Each focus time + short break completes one Pomodoro. A full cycle consists of four Pomodoros, separated by three short breaks. After the fourth Pomodoro, you take a longer break instead of a short one to relax more deeply.

Example sequence using classic timings:

**Example: Task - Studying**

* Focus time: 25 minutes.
* Short break: 5 minutes.
* Long break: 15 minutes.

**The sequence:**

1. 25min focused on Studying.
2. 5min short break.
3. 25min focused on Studying.
4. 5min short break.
5. 25min focused on Studying.
6. 5min short break.
7. 25min focused on Studying.
8. 15min long break.

## 📦 Installation & Running

```bash
# Clone the repository
git clone https://github.com/Alt3rs/chronos-pomodoro.git

# Navigate to the folder
cd chronos-pomodoro

# Install dependencies
npm install

# Start the project
npm run dev
```
