'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV } from '@/lib/constants/nav.constant';

import AllMenu from './AllMenu';
function Header() {
  const pathName = usePathname();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [twoDepthOpenedIdx, setTwoDepthOpenedIdx] = useState<number | null>(
    null,
  );
  const handleTwoDepthOpen = (twoDepthIdx: number | null) => {
    setTwoDepthOpenedIdx((prevIdx) =>
      prevIdx === twoDepthIdx ? null : twoDepthIdx,
    );
  };
  useEffect(() => {
    setIsMenuOpened(false);
  }, [pathName]);
  return (
    <header className="header">
      <div className="inner">
        <h1 className="logo">
          <Link href={'/'}>로고</Link>
        </h1>
        <button
          className={clsx('btn-menu', isMenuOpened && 'active')}
          type="button"
          onClick={() => setIsMenuOpened(!isMenuOpened)}
        >
          <i />
          {/* <i>
            <Bars3CenterLeftIcon />
          </i> */}
        </button>
        <ul className="pc-menu">
          {NAV?.map((oneDepth, oneIndex) => (
            <li
              className="one-depth"
              key={`pcOneDepth${oneIndex}`}
              onMouseEnter={() => handleTwoDepthOpen(oneIndex)}
              onMouseLeave={() => handleTwoDepthOpen(null)}
            >
              <div className="one-link f-bd4">{oneDepth.title}</div>
              {oneDepth?.children && (
                <div
                  className={clsx(
                    'one-list',
                    twoDepthOpenedIdx === oneIndex && 'active',
                  )}
                >
                  <ul className="two-depth">
                    {oneDepth?.children.map((twoDepth, twoIndex) => (
                      <li className="two-list" key={`pcTwoDepth${twoIndex}`}>
                        <Link className="two-link f-bd4" href={twoDepth.path}>
                          {twoDepth.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
        <AllMenu isMenuOpened={isMenuOpened} pathName={pathName} />
      </div>
    </header>
  );
}

export default Header;
