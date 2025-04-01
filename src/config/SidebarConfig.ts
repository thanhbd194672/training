import absenceImg from "../assets/Vector.png";
import logoutImg from "../assets/logout.png"

export const sidebarConfig: Record<string, { title: string,icon: string; label: string ;onClick?: () => void}[]> = {
  "/absent-application": [
    { title :"REQUEST" ,icon: absenceImg, label: "Absence Records",onClick :()=> handleClickButtonRequest() },
    { title: "ACTION", icon: logoutImg, label: "Logout" ,onClick: () => handleLogout()},
  ],
  "/send-absent": [
    { title :"REQUEST" ,icon: absenceImg, label: "Absence Records" ,onClick :()=> handleClickButtonRequest() },
    { title: "ACTION", icon: logoutImg, label: "Logout" ,onClick: () => handleLogout()},
  ],
  "/user": [
    { title :"Request" ,icon: absenceImg, label: "Absence Records" },
    // { icon: leaveImg, label: "Leave Requests" },
  ],
};

// Giá trị mặc định nếu không có route khớp
export const defaultSidebarItems = [
  { title :"Request" ,icon: absenceImg, label: "Home" },
//   { icon: leaveImg, label: "Settings" },
];

const handleLogout = () => {
  localStorage.clear(); // Xóa toàn bộ localStorage
  window.location.href = "/login"; // Điều hướng đến trang đăng nhập
};

const handleClickButtonRequest = () =>{
  window.location.href = "/absent-application"
}
