import { useState } from "react";
import LoginForm from "./LoginForm";
import Sidebar from "./Sidebar";
// import Tricky from "./Tricky";

function HomePage() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("checkLogIn");
    setIsLoggedOut(true);
  }

  return (
    <div>
      {
        isLoggedOut ?
          <LoginForm /> :
          <div>
            <div className="flex justify-end items-end mr-4">
              <button className="bg-red-600 rounded text-xl px-4 py-2 font-semibold mt-4" onClick={handleLogout}>Logout</button>
            </div>
            <div>
              {/* <Tricky></Tricky> */}
              <Sidebar></Sidebar>
            </div>
          </div>
      }


    </div>
  )
}

export default HomePage
