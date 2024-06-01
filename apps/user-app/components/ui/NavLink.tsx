

import Link from "next/link";


const NavLink = ({ item, handleMenuOpen }: any) => {
 
  // If the user clicks on a link, the menu should close and the link should have a bg color
  const handleClick = () => {
    handleMenuOpen();
  }; 

  // It goes to a section not a page
  const pathName = window.location.hash;
  
  return (
    <Link
      onClick={handleClick}
      href={item.path}
      className={` min-w-[100px] p-2 hover:bg-zinc-800 md:hover:bg-none rounded-md font-medium items-center  ${
        pathName === item.path &&
        " text-white bg-gradient-to-tl from-red-400 to-red-500"
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
