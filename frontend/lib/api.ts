const BASE_URL = "http://localhost:5000/api";

export const api = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    },
    ...options
  });
  return res.json();
};
