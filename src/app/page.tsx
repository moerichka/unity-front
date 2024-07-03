"use client";

import useStartPurchase from "hooks/requests/useStartPurchase";

export default function RootPage() {
  const { mutate: startPurchase } = useStartPurchase();

  const onPurchaseButtonClick = () => {
    startPurchase();
  };

  return (
    <div>
      <h1>Test site</h1>

      <div className="">
        <button type="button" onClick={onPurchaseButtonClick}>
          make purchase
        </button>
      </div>
    </div>
  );
}
