import { useMemo } from "react";

export const useTelegram = () => {
  const tg = window.Telegram?.WebApp;

  return useMemo(
    () => ({
      tg,
      user: tg?.initDataUnsafe?.user ?? null,
      initData: tg?.initData,
      colorScheme: tg?.colorScheme,
      themeParams: tg?.themeParams,
    }),
    [tg]
  );
};