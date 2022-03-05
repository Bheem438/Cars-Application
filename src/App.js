import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetUp from "./pages/AllMeetUp";
import Favorites from "./pages/Favorites";
import NewMeetUp from "./pages/NewMeetUp";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUp />} />
        <Route path="/newcars" element={<NewMeetUp />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
