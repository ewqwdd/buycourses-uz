import { Route, Routes } from "react-router";
import WarehouseNav from "./NavItems/WarehouseNav";

export default function BottomNav() {
  return (
    <Routes>
        <Route path="*" element={null} />
        <Route path="/warehouse/*" element={<WarehouseNav />} />
    </Routes>
  )
}
