'use client';

import {
  HomeIcon,
  BookmarkIcon,
  PresentationChartBarIcon,
  ListBulletIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';

import { CONST } from '@/lib/constants';

const navbars = [
  { href: '/main', icon: <HomeIcon />, label: '홈' },
  {
    href: '/guide/streaming',
    icon: <BookmarkIcon />,
    label: CONST.TITLE.GUIDE,
  },
  {
    href: '/chart/melon',
    icon: <PresentationChartBarIcon />,
    label: CONST.TITLE.CHART,
  },
  {
    href: '/guide/list',
    icon: <ListBulletIcon />,
    label: '스밍',
  },
  {
    href: '/vote/collect',
    icon: <CheckIcon />,
    label: CONST.TITLE.VOTE,
  },
];

function NavigationBar() {
  return (
    <nav className="nav-bar">
      {navbars.map((nav, index) => (
        <Link key={index} href={nav.href}>
          <span className={clsx('nav-icon')}>{nav.icon}</span>
          {nav.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavigationBar;
