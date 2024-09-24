import { Outlet } from "react-router-dom";
import Header from "./shared/Header";
import BackToTop from "./components/BackToTop";

export default function Layout() {
  return (
    <main className="relative pt-4 min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 text-white">
      <Header />
      <Outlet />
      <BackToTop />
    </main>
  )
}