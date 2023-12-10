import Main from "../../layout/administrator/dashboard/Index";
import Sidebar from "../../layout/sidebar/Sidebar";
import Header from "../../layout/navbar/Header";
import { AppProvider } from "../../context/ModeContext";

export default function Dashboard() {

    return (
        <AppProvider>
            <div className="flex h-screen overflow-hidden font-sans dark:bg-zinc-950">
                <Sidebar />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Header />
                    <Main />
                </div>
            </div>
        </AppProvider>
    )
}
