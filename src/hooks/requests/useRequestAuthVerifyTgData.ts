import { useMutation } from "@tanstack/react-query";

import { verifyAuthTgData } from "api/auth";
import { useAppDispatch } from "hooks/store";
import { setAuthToken } from "store/appStateSlice";

interface UseRequestAuthVerifyTgData {
  WebApp: typeof window.Telegram.WebApp;
}

const useRequestAuthVerifyTgData = () => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: async ({ WebApp }: UseRequestAuthVerifyTgData) => {
      console.log(JSON.stringify(WebApp.initDataUnsafe));

      return verifyAuthTgData({ tgData: WebApp.initDataUnsafe ?? "" });
    },
    onError: () => {},
    onSuccess: (data) => {
      if (data) dispatch(setAuthToken(data.access_token));
    },
  });
};

export default useRequestAuthVerifyTgData;
