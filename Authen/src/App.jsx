import { useState } from "react";
import "./App.css";
import Login from "./login";
import Like from "./like";
import Ques from "./ques";
import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Ques></Ques>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <Login></Login>
      <Like></Like>
    </>
  );
}

export default App;
