import {UserGroupIcon} from "@heroicons/react/outline";
import{
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
import { auth, db } from "../firebase";
import { useRouter } from "next/router";


function Sidebar() {
    const user = auth.currentUser;
    const router = useRouter();

    const GoToRequests = () => {
        router.push("/FriendRequestsPage");
    }
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow Icon={UsersIcon} title="Friends"/>
            <button type="button" onClick={GoToRequests}>
                {window.location.pathname == "/FriendRequestsPage" ? (
                    <SidebarRow Icon={UserGroupIcon} title="Friend Requests"/>
                ): (
                    <SidebarRow Icon={UserGroupIcon} title="Friend Requests"/>
                )}
            </button>
        </div>
    );
}

export default Sidebar