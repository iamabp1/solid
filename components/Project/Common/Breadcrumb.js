import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Import the back arrow icon from react-icons

const Breadcrumb = ({ title, text }) => {
  const [isMounted, setIsMounted] = useState(false); // State to track if component is mounted
  const [router, setRouter] = useState(null); // To store the router instance after it's mounted

  useEffect(() => {
    setIsMounted(true); // Set the component as mounted on the client side
  }, []);

  // Only access `router` after the component is mounted
  if (!isMounted) {
    return null; // Optionally return a loading state or nothing until mounted
  }

  return (
    <>
      <div className="breadcrumb-area breadcarumb-style-1 pt--140 pb--20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-left">
                {/* Back button with arrow and client-side routing */}
                <button 
                      onClick={() => window.history.back()} 
                      style={{ display: "flex", alignItems: "center", border: "none", background: "transparent", cursor: "pointer",    color: "#dadada" }}
                    >
                      <FaArrowLeft style={{ marginRight: "8px" }} />{title}
                    </button>
                
                    {text}
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
