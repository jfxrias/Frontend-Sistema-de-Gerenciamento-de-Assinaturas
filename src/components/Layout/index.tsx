import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import SidebarMobile from "../../components/SidebarMobile";

export function Layout() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div 
      style={{ 
        display: "flex", 
        flexDirection: windowSize >= 992 ? "row" : "column", 
        minHeight: "100vh", 
        width: "98vw", 
        backgroundColor: "#f8f9fa", 
        overflow: "hidden" 
      }}
    >

        {/*não sei se foi a melhor opção fazer desse jeito, mas tá indo*/}
      
      {windowSize >= 992 ? (
        <Sidebar logOut={handleLogOut} windowSize={windowSize} />
      ) : (
        <SidebarMobile logOut={handleLogOut} />
      )}

      {/*tentativa de implementação do layout responsivo, não sei se tá 100%*/}
      <div style={{ flex: 1, padding: "px", overflowY: "auto", overflowX: "hidden" }}>
        <Outlet />
      </div>

    </div>
  );
}