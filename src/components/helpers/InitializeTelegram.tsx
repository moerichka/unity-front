"use client";

import React, { useEffect, useState } from "react";
import useRequestAuthVerifyTgData from "hooks/requests/useRequestAuthVerifyTgData";
import { useAppSelector } from "hooks/store";

function InitializeTelegram() {
  const { authToken } = useAppSelector((store) => store.appState);
  const [WebApp, setWebApp] = useState<
    typeof window.Telegram.WebApp | undefined
  >(undefined);
  const {
    mutate: verifyTgData,
    isError,
    error,
    isSuccess,
  } = useRequestAuthVerifyTgData();

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      setWebApp(window.Telegram.WebApp);
    }
  }, []);

  useEffect(() => {
    if (WebApp && WebApp.initData) {
      if (!authToken) {
        verifyTgData({ WebApp });
      }

      WebApp.expand();
      WebApp.ready();

      Telegram.WebApp.onEvent("viewportChanged", (isExpanded) => {
        if (!isExpanded) {
          Telegram.WebApp.expand();
        }
      });
    }
  }, [WebApp, verifyTgData]);

  useEffect(() => {
    if (isError && WebApp) {
      WebApp.showAlert(`${error.message}`, () => {});
    }
  }, [isError, isSuccess, WebApp]);

  return null;
}

export default InitializeTelegram;
