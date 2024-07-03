import React from "react";

import InitializeTelegram from "components/helpers/InitializeTelegram";

import s from "./MainLayout.module.scss";

async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={s.mainLayout}>
      <div className={s.content}>{children}</div>

      {/* Helpers */}
      <InitializeTelegram />
    </div>
  );
}

export default MainLayout;
