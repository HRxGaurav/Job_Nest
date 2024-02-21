import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LogContext from "./Utilities/LogContext";
import CoinContext from "./Utilities/CoinContext";
import AppliedContext from "./Utilities/AppliedContext";
import { Toaster } from "react-hot-toast";
import Homepage from "./Pages/Homepage";
import ProfilePage from "./Pages/ProfilePage";


const App = () => {
  const [logged, setLogged] = useState(false);
  const [coinBalance, setCoinBalance] = useState(0);
  const [appliedJobIds, setAppliedJobIds] = useState([]);

  return (
    <>
      <LogContext.Provider value={[logged, setLogged]}>
        <CoinContext.Provider value={[coinBalance, setCoinBalance]}>
        <AppliedContext.Provider value={[appliedJobIds, setAppliedJobIds]}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/create_profile" element={<ProfilePage />} />
          </Routes>
          <Toaster
            position="top-center"
            toastOptions={{ style: { width: "300px ", fontSize: "20px" } }}
          />
          </AppliedContext.Provider>
        </CoinContext.Provider>
      </LogContext.Provider>
    </>
  );
};




export default App;
