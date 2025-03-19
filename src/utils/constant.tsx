import Courses from "@/components/Admin/Courses"
import Dashboard from "@/components/Admin/Dashboard"
import Students from "@/components/Admin/Students"

export const adminPanelNavList = [
    {
        name:"Dashboard"
    },
    {
        name:"Students"
    },
    {
        name:"My Courses"
    }
]

export const adminPanelNavPages = {
        "Dashboard":<Dashboard/>,
        "Students":<Students/>,
        "My Courses":<Courses/>,
}

export const adminDashboardCardn = [
    {
        number:245,
            subText:"Impression - 20%",
            title:"Total Students",
            bg:"#EEF5FF"
    },
    {
        number:245,
            subText:"Impression - 20%",
            title:"Active Subscriptions",
            bg:"#FFFBEF"
    },
    {
        number:245,
            subText:"Impression - 20%",
            title:"Pending Payments",
            bg:"#ECFFF4"
    },
    {
        number:245,
            subText:"Impression - 20%",
            title:"Inactive students",
            bg:"#EEF5FF"
    },
    {
        number:245,
            subText:"Impression - 20%",
            title:"website/inquires",
            bg:"#FFFBEF"
    }
]