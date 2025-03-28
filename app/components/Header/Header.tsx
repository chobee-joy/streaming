import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-center text-white bg-black h-60 md:h-80">
      <Bars3CenterLeftIcon className="absolute w-32 left-16" />
      <h1>로고 이미지 필요</h1>
    </header>
  );
}

export default Header;
