import { useMutation } from "@tanstack/react-query";

import { startPurchase } from "api/auth";
import { useAppDispatch, useAppSelector } from "hooks/store";

const useStartPurchase = () => {
  const dispatch = useAppDispatch();
  const { authToken } = useAppSelector((store) => store.appState);

  return useMutation({
    mutationFn: async () => {
      return startPurchase(authToken);
    },
    onError: () => {},
    onSuccess: (data) => {
      window.Telegram.WebApp.openInvoice(data, (status) => {
        console.log(status);
      });
    },
  });
};

export default useStartPurchase;
