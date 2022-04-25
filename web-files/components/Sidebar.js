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
<<<<<<< HEAD

    const GoToFriends = () => {
        router.push("/FriendsPage");
    }
    
=======
    const GoToFriends = () => {
        router.push("/FriendsPage");
    }
>>>>>>> KrunalsTestBranch
    // Renders the side bar and it's icons
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <div>
                <button type="button" onClick={GoToFriends}>
                    {window.location.pathname == "/FriendsPage" ? (
<<<<<<< HEAD
                        <SidebarRow Icon={UsersIcon} title="Friends"/>
=======
                        <SidebarRow active Icon={UsersIcon} title="Friends"/>
>>>>>>> KrunalsTestBranch
                    ): (
                        <SidebarRow Icon={UsersIcon} title="Friends"/>
                    )}
                </button>
<<<<<<< HEAD
                </div>
                <div>
                <button type="button" onClick={GoToRequests}>
                    {window.location.pathname == "/FriendRequestsPage" ? (
                        <SidebarRow Icon={UserGroupIcon} title="Friend Requests"/>
=======
                <div></div>
                <button type="button" onClick={GoToRequests}>
                    {window.location.pathname == "/FriendRequestsPage" ? (
                        <SidebarRow active Icon={UserGroupIcon} title="Friend Requests"/>
>>>>>>> KrunalsTestBranch
                    ): (
                        <SidebarRow Icon={UserGroupIcon} title="Friend Requests"/>
                    )}
                </button>
            </div>
        </div>
    );
}

export default Sidebar