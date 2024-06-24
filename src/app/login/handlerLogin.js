// handlerLogin.js
export default async function handlerLogin(formData) {
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const data = await response.json();
  console.log("hola");
  console.log(data.token);
  return data.token; // Devuelve el token al cliente
}
