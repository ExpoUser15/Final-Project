import logo from "/logo/logo-icon-7e6ff7aa.svg";
import Bell from "../buttons/NotificationButton";
import Mode from "../buttons/ModeButton";
import Messages from "../buttons/MessagesButton";
import Profile from "../buttons/ProfileButton";

export default function Header(){
    const handleSidebar = (e) => {
        e.preventDefault();
        const sidebar = document.querySelector("aside");
        sidebar.classList.replace("-translate-x-full", "translate-x-0");
    }

    return (  
        <header className="sticky top-0 z-40 flex w-full bg-white drop-shadow-md dark:bg-neutral-900 dark:drop-shadow-md">
            <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flex flex-grow items-center gap-5 px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                    <button onClick={handleSidebar} aria-controls="sidebar" className="block rounded-sm border border-stroke bg-white p-1 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 lg:hidden">
                        <svg className="fill-gray-600 dark:fill-slate-200" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    </button>
                    <a className="block flex-shrink-0 lg:hidden" href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="flex items-center gap-8 2xsm:gap-7">
                    <ul className="flex items-center gap-4 2xsm:gap-4">
                        <Mode />
                        <Bell />
                        <Messages />
                    </ul>
                    <Profile />
                </div>
            </div>
        </header>
    )
}