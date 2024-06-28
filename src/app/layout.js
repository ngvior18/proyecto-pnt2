"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import Nav from "./Nav";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    const checkToken = async () => {
      const adminAuthToken = localStorage.getItem("adminAuthToken");
      const authToken = localStorage.getItem("authToken");

      if (!adminAuthToken && !authToken) {
        return;
      }

      try {
        if (authToken) {
          const userResponse = await fetch(
            "http://localhost:3000/api/verificarToken",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token: authToken }),
            }
          );

          const response = await userResponse.json();
          if (!response.success) {
            toast.error(response.error);
            router.push("/login");
          }
        }

        if (adminAuthToken) {
          const adminResponse = await fetch(
            "http://localhost:3000/api/verificarToken",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token: authToken }),
            }
          );

          const response = await adminResponse.json();
          if (!response.success) {
            toast.error(response.error);
            router.push("/admin/login");
          }
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        localStorage.clear();
        router.push("/login");
      }
    };

    checkToken();
  }, [router]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
