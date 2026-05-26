export function generateRandomUser() {
  const timestamp = Date.now();

  return {
    name: "Joel Test",
    email: `joel.${timestamp}@example.com`,
    password: "Password123!",
  };
}
