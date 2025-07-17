// src/authhook/auth.js
import { useEffect } from "react";
import axios from "axios";

const useAutoRefresh = () => {
  useEffect(() => {
    const refreshInterval = setInterval(() => {
      const currentToken = localStorage.getItem("token");

      if (!currentToken) {
        console.warn("⚠️ No token found in localStorage, skipping refresh");
        return;
      }

        axios
        .get(
          "https://miracle-fest-website-backend.onrender.com/api/auth/refresh-token",
          {
            headers: {
              Authorization: `Bearer ${currentToken}`,
            },
            withCredentials: true, // Include refreshToken cookie
          }
        )
        .then((response) => {
        
          const accessToken = response.data;
    
          if (accessToken) {
            console.log("old token : " + currentToken);
            console.log("new token : " + accessToken);
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${accessToken}`;

            localStorage.setItem("token", accessToken);


    
          }
        })
        .catch((error) => {
          console.error(
            "❌ Failed to refresh token:",
            error.response?.data || error.message
          );
        });
    }, 3 * 60 * 1000); // every 4 minutes

    return () => clearInterval(refreshInterval);
  }, []);
};

export default useAutoRefresh;
