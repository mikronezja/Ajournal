import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage.tsx";
import Navbar from "./pages/navbar/Navbar.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/calendar" element={<CalendarPage />} /> 
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
