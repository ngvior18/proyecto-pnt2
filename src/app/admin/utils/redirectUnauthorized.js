import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function redirectUnauthorized(message) {
  toast.error(message);
  if (typeof window !== "undefined") {
    const router = useRouter();
    router.push("/admin/login");
  }
}
