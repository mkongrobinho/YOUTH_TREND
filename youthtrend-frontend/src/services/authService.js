<<<<<<< HEAD
import request from './api'

export const registerUser = (data) =>
  request('/auth/register', { method: 'POST', body: JSON.stringify(data) })

export const loginUser = (data) =>
  request('/auth/login', { method: 'POST', body: JSON.stringify(data) })
=======
export async function login(email, password) {
  const base = import.meta.env.VITE_API_BASE_URL;

  if (base) {
    const res = await fetch(`${base}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err || "Login failed");
    }

    const data = await res.json();
    return data;
  }

  // Fallback: simple mock logic when no backend URL provided
  let role = "student";
  if (email && email.toLowerCase().includes("admin")) role = "admin";
  else if (email && email.toLowerCase().includes("leader")) role = "leader";

  return { role, token: "mock-token" };
}

export function logout() {
  localStorage.removeItem("userRole");
  localStorage.removeItem("authToken");
}
>>>>>>> 91aadaf (Complete YouthTrend frontend updates: student features, events, leader and admin dashboards)
