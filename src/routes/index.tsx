import { Route, Routes, Navigate } from "react-router-dom";
import * as P from "@/pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/audio" replace />} />
      <Route path="/audio" element={<P.Audio />} />
      <Route path="/*" element={<Navigate to="/audio" replace />} />
    </Routes>
  )
}