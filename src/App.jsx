import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!window.Telegram) {
      console.log("Telegram object not found");
      return;
    }

    const tg = window.Telegram.WebApp;

    tg.ready();
    tg.expand();

    console.log(tg);
    console.log(tg.initDataUnsafe);

    setUser(tg.initDataUnsafe?.user ?? null);
  }, []);

  return (
    <div>
      <h1>Telegram Mini App</h1>

      {user ? (
        <>
          <p>ID: {user.id}</p>
          <p>Name: {user.first_name}</p>
          <p>Username: {user.username}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;