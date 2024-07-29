import { useState } from 'react';
import {
  ArrowLeftToLine,
  ArrowRightFromLine,
  ChartNoAxesCombined,
  House,
  PackageSearch,
  SquareChevronLeft,
  SquareChevronRight,
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export const SideBar = () => {
  const [open, setOpen] = useState(true);

  const toggleSideBar = () => {
    setOpen(!open);
  };

  return (
    <section
      className={`relative flex h-full flex-col rounded-r-3xl bg-brillantblue p-5 text-white transition-all duration-300 ease-in-out ${open ? 'w-[14%]' : 'w-[5%]'}`}
    >
      <div className="mb-28 text-center text-xl">{open && 'logo'}</div>
      <nav className="mt-10 flex flex-col gap-7 text-xl">
        <div className={`flex items-center gap-2 rounded-xl p-3 hover:bg-darkblue ${open ? "justify-start" : "justify-center"}`}>
          <House />
          {open && <span>Home</span>}
        </div>
        <div className={`flex items-center gap-2 rounded-xl p-3 hover:bg-darkblue ${open ? "justify-start" : "justify-center"}`}>
          <PackageSearch />
          {open && <span>Inventory</span>}
        </div>
        <div className={`flex items-center gap-2 rounded-xl p-3 hover:bg-darkblue ${open ? "justify-start" : "justify-center"}`}>
          <ChartNoAxesCombined />
          {open && <span>Analytics</span>}
        </div>
            <div className={`flex items-center gap-2 rounded-xl p-3 hover:bg-darkblue ${open ? "justify-start" : "justify-center"}`}>
          <FontAwesomeIcon icon={faUsers} style={{ color: '#ffffff' }} />
          {open && <span>Customer</span>}
        </div>
      </nav>
      {open && <div className="absolute bottom-0">footer</div>}
      <button
        onClick={toggleSideBar}
        className="absolute bottom-20 right-0 flex size-12 translate-x-1/2 items-center justify-center rounded-full bg-darkblue text-white hover:bg-darkblue focus:outline-none"
      >
        {open ? (
          <ArrowLeftToLine size={18} />
        ) : (
          <ArrowRightFromLine size={18} />
        )}
      </button>
    </section>
  );
};

export default SideBar;
