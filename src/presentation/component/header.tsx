import { Link } from "react-router-dom";
import alertButton from "../../assets/button_alert.png"
import avatar from "../../assets/profile-img.jpg.png"
import { useEffect, useState } from "react";

const Header = () => {
  const [name, setName] = useState(localStorage.getItem("name"));

  useEffect(() => {
    const handleStorageChange = () => {
      setName(localStorage.getItem("name")); 
    };

    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  
  return (
      <div className="flex justify-between items-center font-semibold bg-white px-10 py-2 text-[26px] drop-shadow-[0_2px_20px_rgba(1,41,112,0.1)]">
        SYP Leave Management
        {name && 
        <div className="flex items-center gap-3">
          <button>
              <img src={alertButton}/>
          </button>
          <img src ={avatar}></img>
          <div className="text-[14px]">
            {name}
          </div>
        </div>
        } 
      </div>
  );
};

export default Header;
