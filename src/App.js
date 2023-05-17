import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./route/Layout";
import NoPage from "./route/NoPage";
import Home from "./pages/home/Home";
import People from "./pages/people/People";
import Contact from "./pages/contact/Contact";
import PersonProfile from "./pages/personProfile/PersonProfile";
import Clock from "./pages/clock/Clock";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="people" element={<People />} />
          <Route path="contact" element={<Contact />} />
          <Route path="personProfile" element={<PersonProfile />} />
          <Route path="clock" element={<Clock />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
