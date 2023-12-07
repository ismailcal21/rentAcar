import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import Header from "./component/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
