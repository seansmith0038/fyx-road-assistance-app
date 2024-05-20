export const BASE_URL = "http://localhost:3000";

export async function getServices() {
  const response = await fetch(`${BASE_URL}/services`);

  return response.json();
}

export async function getService(id) {
  const response = await fetch(`${BASE_URL}/services/${id}`);

  return response.json();
}
