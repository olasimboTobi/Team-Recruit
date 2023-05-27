import { ToastContainer } from "react-toastify";
import TeamBackground from "./Pages/TeamBackground";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        className="w-full"
        style={{ width: "600px" }}
      />

      <TeamBackground />
    </>
  );
}

export default App;
