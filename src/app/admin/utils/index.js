import toast from "react-hot-toast";

export function redirectUnauthorized(message, router) {
  toast.error(message);
  if (typeof window !== "undefined") {
    router.push("/admin/login");
  }
}

export function verifyAdminAuthToken(router) {
  let isAdmin = false;

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("adminAuthToken");
    if (!token) {
      toast.error("Ingrese con una cuenta Admin");
      router.push("/admin/login");
    } else {
      // console.log("Token admin verificado ;)");
      isAdmin = true;
    }
  }
  console.log("Admin?", isAdmin);
  return isAdmin;
}
