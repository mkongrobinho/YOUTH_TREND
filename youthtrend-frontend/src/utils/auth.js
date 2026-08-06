export const loginUser = (role) => {

  localStorage.setItem(
    "userRole",
    role
  );

};


export const getUserRole = () => {

  return localStorage.getItem("userRole");

};


export const logoutUser = () => {

  localStorage.removeItem("userRole");

};