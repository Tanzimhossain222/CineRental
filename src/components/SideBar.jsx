import CommingSoon from "../assets/icons/commingSoon.svg";
import Favourite from "../assets/icons/favourite.svg";
import NewRelease from "../assets/icons/newRelease.svg";
import Tranding from "../assets/icons/trending.svg";
import WatchLater from "../assets/icons/watchLater.svg";

const SideBar = () => {
  return (
    <>
      <aside>
        <ul className="space-y-2">
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#Trending"
            >
              <img src={Tranding} width="24" height="24" alt="Trending" />
              <span>Trending</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#NewRelease"
            >
              <img src={NewRelease} width="24" height="24" alt="New Release" />
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#CommingSoon"
            >
              <img
                src={CommingSoon}
                width="24"
                height="24"
                alt="Comming Soon"
              />
              <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#Favourite"
            >
              <img src={Favourite} width="24" height="24" alt="Favourite" />
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#WatchLater"
            >
              <img src={WatchLater} width="24" height="24" alt="Watch Later" />
              <span>Watch Later</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
