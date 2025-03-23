import Courses from "@/components/Admin/Courses"
import Dashboard from "@/components/Admin/Dashboard"
import Playlists from "@/components/Admin/Playlists"
import Students from "@/components/Admin/Students"
import Videos from "@/components/Admin/Videos"

export const adminPanelNavList = [
    {
        name:"Dashboard"
    },
    {
        name:"Students"
    },
    {
        name:"My Courses"
    },
    {
        name:"My Playlist"
    },
    {
        name:"My Videos"
    }
]

export const adminPanelNavPages = {
        "Dashboard":<Dashboard/>,
        "Students":<Students/>,
        "My Courses":<Courses/>,
        "My Playlist":<Playlists/>,
        "My Videos":<Videos/>,
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

export const adminCapsuleList = [
    {
        title:"Dashboard"
    },
    {
        title:"Students"
    },
    {
        title:"My Courses"
    },
    {
        title:"My Playlist"
    },
    {
        title:"My Videos"
    }
]

export const coursesdata = [
    { name: "Quran Daily", rate: "399", lessons: 20, creator: "AiFaiz", rating: 4.5, content: 110 },
    { name: "Hadith Essentials", rate: "299", lessons: 15, creator: "IslamicLearn", rating: 4.7, content: 95 },
    { name: "Tafsir Insights", rate: "499", lessons: 25, creator: "MuftiOnline", rating: 4.8, content: 130 },
    { name: "Quran Mastery", rate: "599", lessons: 30, creator: "Sheikh Ahmed", rating: 4.9, content: 150 },
    { name: "Islamic Studies", rate: "199", lessons: 10, creator: "Ulama Academy", rating: 4.3, content: 80 },
    { name: "Fiqh Fundamentals", rate: "349", lessons: 18, creator: "Dr. Farhan", rating: 4.6, content: 100 },
    { name: "Tajweed Excellence", rate: "450", lessons: 22, creator: "Qari Saad", rating: 4.7, content: 120 },
    { name: "Seerah Journey", rate: "275", lessons: 12, creator: "Islamic Scholars", rating: 4.4, content: 90 },
    { name: "Arabic Basics", rate: "320", lessons: 16, creator: "Language Experts", rating: 4.5, content: 85 },
    { name: "Islamic History", rate: "410", lessons: 21, creator: "Professor Zaid", rating: 4.8, content: 125 },
    { name: "Dua Collection", rate: "150", lessons: 8, creator: "IslamicConnect", rating: 4.2, content: 60 },
    { name: "Aqeedah Simplified", rate: "390", lessons: 20, creator: "Faith Academy", rating: 4.7, content: 115 },
    { name: "Hifz Program", rate: "620", lessons: 35, creator: "Quran Institute", rating: 4.9, content: 160 },
    { name: "Ramadan Guide", rate: "200", lessons: 11, creator: "Sheikh Umar", rating: 4.3, content: 75 },
    { name: "Islamic Parenting", rate: "330", lessons: 17, creator: "Family Scholars", rating: 4.6, content: 105 },
    { name: "Shariah Explained", rate: "480", lessons: 23, creator: "Legal Islam", rating: 4.8, content: 130 },
    { name: "Islamic Finance", rate: "550", lessons: 28, creator: "Mufti Bilal", rating: 4.9, content: 145 },
    { name: "Quran Reflections", rate: "370", lessons: 19, creator: "Tafsir Experts", rating: 4.6, content: 110 },
    { name: "Spiritual Growth", rate: "290", lessons: 14, creator: "Iman Boost", rating: 4.5, content: 90 },
    { name: "Prophetic Manners", rate: "260", lessons: 13, creator: "Sunnah Academy", rating: 4.4, content: 85 }
  ];