"use client";

import { AlignEndHorizontal, Medal, StickyNote, Menu } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const closeSidebar = () => setExpanded(false);

  return (
    <div>
      <button 
        className="sm:hidden fixed top-10 right-4 z-50 p-2 bg-gray-200 rounded-full"
        onClick={() => setExpanded(!expanded)}
      >
        <Menu />
      </button>

      <div 
        className={`sm:sticky z-40 fixed left-0 top-[14vh] w-[250px] flex flex-col gap-3 pt-16 h-[86vh] border-r font-bold bg-white transition-transform ${
          expanded ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
      >
        <Link href="/dashboard" onClick={closeSidebar} className="flex gap-5 rounded-tr-full rounded-br-full pl-10 hover:bg-slate-100 hover:text-blue-600 py-5 mr-4">
          <AlignEndHorizontal />
          Dashboard
        </Link>
        <Link href="/skilltest" onClick={closeSidebar} className="flex gap-5 rounded-tr-full rounded-br-full pl-10 hover:bg-slate-100 hover:text-blue-600 py-5 mr-4">
          <Medal />
          Skill Test
        </Link>
        <Link href="/internship" onClick={closeSidebar} className="flex gap-5 rounded-tr-full rounded-br-full pl-10 hover:bg-slate-100 hover:text-blue-600 py-5 mr-4">
          <StickyNote />
          Internship
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
