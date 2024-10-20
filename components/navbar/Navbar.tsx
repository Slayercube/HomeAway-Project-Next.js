import NavSearch from './NavSearch';
import LinksDropdown from './LinksDropdown';
import DarkMode from './DarkMode';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className='border-b'>
      <div className='container flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap gap-4 py-8'>
        <div className='flex justify-between w-full sm:w-auto'>
          <Logo />
          <div className='flex gap-4 items-center sm:hidden'>
            <DarkMode />
            <LinksDropdown />
          </div>
        </div>
        <NavSearch />
        <div className='hidden sm:flex gap-4 items-center'>
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;