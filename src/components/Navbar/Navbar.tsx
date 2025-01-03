import { MouseEventHandler, useState } from "react";
import "./Navbar.css";
import { NavBarLinksType } from "@/types/types";

function Navbar(navbarLinks: NavBarLinksType) {
  const [showSublink, setShowSublink ] = useState(false);
  const [sublinkIndex, setsublinkIndex ] = useState(0);
  //   background-color: #242424;
  const { links } = navbarLinks;

  const enterFunc = (event: any)=> {
    setsublinkIndex(event.target.getAttribute('data-index'));
    // console.log(links[sublinkIndex].subLinksData[sublinkIndex]);

    setShowSublink(true);
  }
  return (
    <nav onMouseLeave={() => setShowSublink(false)} className="w-full h-min z-50 fixed">
      <div className="w-full flex flex-col">
        <div className="w-fit m-auto">
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
          <div className="flex">
              {
                links[sublinkIndex].subLinksData.map((sublinkDataSet, index) => (
                  <ul key={index}>
                    <h1 className="ml-4 opacity-80">{sublinkDataSet.title }</h1>
                    {sublinkDataSet.sublinks.map((sublink, sublinkIndex) => (
                        <li
                          className={ (index===0 ? 'text-bold text-lg' : 'text-md') + ` text-white cursor-pointer  ml-4 mr-4 mt-4 mb-4 hover:text-white`}
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
    </nav>
  );
}

export default Navbar;
