import { useEffect } from "react";

function App() {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (!tg) {
      console.log("Not inside Telegram");
      return;
    }

    tg.ready();
    tg.expand();

    console.log("Telegram User:", tg.initDataUnsafe.user);
    console.log("Theme:", tg.colorScheme);
  }, []);

  return <h1>Hello Telegram!</h1>;
}

export default App;