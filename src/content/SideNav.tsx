import { FiBookOpen, FiChevronDown, FiMail } from "react-icons/fi";
import { TfiGallery } from "react-icons/tfi";
import { RiVidiconLine } from "react-icons/ri";
import {
  AiOutlineFileText,
  AiOutlineLink,
  AiOutlineNotification,
  AiOutlineReconciliation,
  AiOutlineUserSwitch,
  AiTwotoneStar,
} from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { CiReceipt } from "react-icons/ci";
import {
  FaHome,
  FaUsers,
  FaUserGraduate,
  FaUserPlus,
  FaUserTie,
  FaBook,
  FaUserNurse,
  FaUserMinus,
} from "react-icons/fa";
import { TbBrandLetterboxd } from "react-icons/tb";
import { BsBookHalf } from "react-icons/bs";

interface SideNavLink {
  path?: string;
  title: any;
  nestedRoutes?: SideNavLink[];
}

export const sideNavLink: SideNavLink[] = [
  {
    path: "/admin",
    title: (
      <span className="flex gap-x-2 items-center">
        {" "}
        <FaHome className="text-lg" /> Dashbaord{" "}
      </span>
    ),
  },
  {
    path: "/admin/committee",
    title: (
      <span className="flex gap-x-2 items-center text-white">
        {" "}
        <FaUserMinus className="text-lg" /> Committee
      </span>
    ),
  },
  {
    title: (
      <span className="flex gap-x-2 items-center">
        {" "}
        <FaUserTie className="text-lg" /> Teachers{" "}
      </span>
    ),
    nestedRoutes: [
      {
        path: "/admin/teachers",
        title: (
          <span className="flex gap-x-2 items-center">
            {" "}
            <FaUsers className="text-lg" /> Teachers List{" "}
          </span>
        ),
      },
      {
        path: "/admin/multipleTeachersAdd",
        title: (
          <span className="flex gap-x-2 items-center">
            {" "}
            <FaUserPlus className="text-lg" /> Add Teachers{" "}
          </span>
        ),
      },
    ],
  },
  {
    path: "/admin/staff",
    title: (
      <span className="flex gap-x-2 items-center text-white">
        {" "}
        <AiOutlineUserSwitch className="text-lg" /> Staffs
      </span>
    ),
  },
  {
    title: (
      <span className="flex gap-x-2 items-center">
        {" "}
        <FaUserGraduate className="text-lg" /> Students{" "}
      </span>
    ),
    nestedRoutes: [
      {
        path: "/admin/students",
        title: (
          <span className="flex gap-x-2 items-center">
            {" "}
            <FaUsers className="text-lg" /> Students List{" "}
          </span>
        ),
      },
      {
        path: "/admin/addStudents",
        title: (
          <span className="flex gap-x-2 items-center">
            {" "}
            <FaUserPlus className="text-lg" /> Add Students{" "}
          </span>
        ),
      },
      {
        path: "/admin/classes",
        title: (
          <span className="flex gap-x-2 items-center">
            {" "}
            <AiTwotoneStar className="text-lg" /> Classes{" "}
          </span>
        ),
      },
      {
        path: "/admin/sections",
        title: (
          <span className="flex gap-x-2 items-center">
            {" "}
            <TbBrandLetterboxd className="text-lg" /> Sections{" "}
          </span>
        ),
      },
      {
        path: "/admin/examName",
        title: (
          <span className="flex gap-x-2 items-center">
            {" "}
            <BsBookHalf className="text-lg" /> Exam Name{" "}
          </span>
        ),
      },
    ],
  },
  {
    path: "/admin/notice",
    title: (
      <span className="flex gap-x-2 items-center text-white">
        {" "}
        <AiOutlineNotification className="text-lg" /> Notices
      </span>
    ),
  },
  {
    title: (
      <span className="flex gap-x-2 items-center">
        {" "}
        <HiOutlineAcademicCap className="text-lg" /> Academics
      </span>
    ),
    nestedRoutes: [
      {
        path: "/admin/onlineClasses",
        title: (
          <span className="flex gap-x-2 items-center text-white">
            {" "}
            <RiVidiconLine className="text-lg" /> Online Classes
          </span>
        ),
      },
      {
        path: "/admin/generateTestimonial",
        title: (
          <span className="flex gap-x-2 items-center text-white">
            {" "}
            <CiReceipt className="text-lg" /> Generate Testimonial
          </span>
        ),
      },
    ],
  },
  {
    title: (
      <span className="flex gap-x-2 items-center">
        {" "}
        <AiOutlineFileText className="text-lg" /> Results
      </span>
    ),
    nestedRoutes: [
      {
        path: "/admin/boardResult",
        title: (
          <span className="flex gap-x-2 items-center text-white">
            {" "}
            <FaBook className="text-lg" /> Board Results
          </span>
        ),
      },
      {
        path: "/admin/academicsResult",
        title: (
          <span className="flex gap-x-2 items-center text-white">
            {" "}
            <AiOutlineReconciliation className="text-lg" /> Academic Results
          </span>
        ),
      },
    ],
  },
  {
    path: "/admin/importantLinks",
    title: (
      <span className="flex gap-x-2 items-center text-white">
        {" "}
        <AiOutlineLink className="text-lg" /> Important Links
      </span>
    ),
  },
  {
    path: "/admin/subjects",
    title: (
      <span className="flex gap-x-2 items-center text-white">
        {" "}
        <FiBookOpen className="text-lg" /> Subjects
      </span>
    ),
  },
  {
    path: "/admin/gallery",
    title: (
      <span className="flex gap-x-2 items-center text-white">
        {" "}
        <TfiGallery className="text-lg" /> Gallery
      </span>
    ),
  },
  {
    title: (
      <span className="flex gap-x-2 items-center">
        {" "}
        <FiMail className="text-lg" /> Messages
      </span>
    ),
    nestedRoutes: [
      {
        path: "/admin/sovhapotiMessage",
        title: (
          <span className="flex gap-x-2 items-center text-white">
            {" "}
            <FaUserNurse className="text-lg" />
            Chairman Message
          </span>
        ),
      },
      {
        path: "/admin/headMasterMessage",
        title: (
          <span className="flex gap-x-2 items-center text-white">
            {" "}
            <FaUserGraduate className="text-lg" /> HeadMaster Message
          </span>
        ),
      },
    ],
  },
];
