import { Route, Routes } from "react-router";
import WarehouseNav from "./NavItems/WarehouseNav";
import MainNav from "./NavItems/MainNav";

export default function BottomNav() {
  return (
    <Routes>
        <Route path="/" element={<MainNav />} />
        <Route path="/:slug" element={<MainNav />} />
        <Route path="/:slug/:item" element={<MainNav />} />
        <Route path="/create" element={<MainNav />} />
        <Route path="/warehouse/*" element={<WarehouseNav />} />
        <Route path="/top-up" element={null} />
        <Route path="/help" element={null} />
    </Routes>
  )
}
