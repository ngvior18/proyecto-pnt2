import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default async function verificarToken(token, userType) {
  const router = useRouter();

  const response = await fetch("http://localhost:3000/api/verificarToken", {
    method: "GET",
    headers: { "Content-type": "application/json" },
    body: token,
  });

  if (response.status == 401) {
    const data = await response.json();
    toast.error(data.error);
    userType == "Admin" ? router.push("/admin/login") : router.push("/login");
  }
}
