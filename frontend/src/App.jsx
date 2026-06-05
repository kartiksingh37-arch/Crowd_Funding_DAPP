import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CampaignDetails from "./pages/CampaignDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/campaign/:id"
          element={<CampaignDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;