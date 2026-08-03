import React from 'react'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/95 py-4">
      <div className="container mx-auto flex items-center justify-between">

        <div className="flex gap-1">
          <div className="logo">
            <img src={logo} style={{ width: 50 }} alt="" srcset="" />
          </div>
          <div className="logo-title text-start">
            <span className='text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent'>عدسة</span>
            <span className='text-xs text-orange-400/80 hidden sm:block tracking-wide'>عالم التصوير الفوتوغرافي</span>
          </div>
        </div>

        <ul className="flex gap-6">
          <li>
            <NavLink className="text-white hover:text-gray-300" to="">
              الرئيسية
            </NavLink>
          </li>

          <li>
            <NavLink className="text-white hover:text-gray-300" to="blog">
              المدونة
            </NavLink>
          </li>

          <li>
            <NavLink className="text-white hover:text-gray-300" to="about">
              من نحن
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="text-white">
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
          </button>

          <button
            id="startBtn"
            className="px-4 py-3 rounded-3xl text-white bg-[linear-gradient(135deg,#f97316,#ea580c)]"
          >
            <NavLink to="blog">ابدأ القراءة</NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
}
