"use client";

import { useEffect } from "react";
import { verifyAdminAuthToken } from "./utils";
import { useRouter } from "next/navigation";

export default function PageAdmin() {
  const router = useRouter();

  useEffect(() => {
    verifyAdminAuthToken(router);
  }, []);

  return (
    <>
      <p>Usted se encuentra dentro del Administrador de Componentes ORT</p>
    </>
  );
}
