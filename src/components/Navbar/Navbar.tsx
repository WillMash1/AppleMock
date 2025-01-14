import { useState } from "react";
import "./Navbar.css";
import { NavBarLinksType } from "@/types/types";

function Navbar(navbarLinks: NavBarLinksType) {
  const [showSublink, setShowSublink ] = useState(false);
  const [sublinkIndex, setsublinkIndex ] = useState<number>(0);
  const { links } = navbarLinks;

  const enterFunc = (event: React.MouseEvent<HTMLLIElement, MouseEvent>
  )=> {
    if(event) {
      const target:HTMLElement = event.target as HTMLElement;
      setsublinkIndex(Number(target.getAttribute('data-index')));
    }
    setShowSublink(true);
  }
  return (
    <nav onMouseLeave={() => setShowSublink(false)} className="w-full h-min z-50 fixed transition-all ease-in-out">
      <div className="w-full flex flex-col">
        <div className="w-fit m-auto  ">
        <ul className="flex m-auto">
          {links.map((link, index) => (
            <li onMouseEnter={enterFunc}
              data-index={index}
              className="cursor-pointer ml-4 mr-4 mt-4 mb-4 hover:text-white"
              key={index}
            >
              {link.link}
            </li>
          ))}
        </ul>
        {showSublink && links[sublinkIndex] && links[sublinkIndex].subLinksData && (
          <div className={'flex ' + (showSublink ? ' h-auto transition-all ease-in-out m-12 ml-0' : ' h-0 ' ) }>
              {
                links[sublinkIndex].subLinksData.map((sublinkDataSet, index) => (
                  <ul key={index}>
                    <h1 className="ml-4 mb-4 opacity-80">{sublinkDataSet.title }</h1>
                    {sublinkDataSet.sublinks.map((sublink, sublinkIndex) => (
                        <li
                          className={ (index===0 ? ' text-2xl text-green' : 'text-md') +  'text-bold text-white cursor-pointer  ml-4 mr-4 mt-2 mb-2 hover:text-white'}
                          key={sublinkIndex}
                        >
                          {sublink}
                        </li>
                      ))}
                  </ul>
                ))
              }
            </div>
          )}
        </div>
      </div>
      <div className="backgroundBlur blur-sm">
      </div>
    </nav>
  );
}

export default Navbar;