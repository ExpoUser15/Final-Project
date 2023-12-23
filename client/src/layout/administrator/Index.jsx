import Sidebar from "../../components/sidebar/AdminSidebar";
import Header from "../../components/navbar/Header";
import { AppProvider } from "../../context/ModeContext";
import { Outlet } from "react-router-dom";

export default function Dashboard(){
    return (
        <AppProvider>
            <div className="flex h-screen overflow-hidden font-sans bg-slate-200 dark:bg-zinc-950">
                <Sidebar />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </AppProvider>
    )
}