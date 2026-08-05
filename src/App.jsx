import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (!tg) return;

    tg.ready();
    tg.expand();

    setUser(tg.initDataUnsafe.user);
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