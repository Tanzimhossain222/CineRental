import { useState } from "react";
import { useMovieDetails, useTheme } from "../context";
import MoonLogo from "./../assets/icons/moon.svg";
import SunLogo from "./../assets/icons/sun.svg";
import Logo from "./../assets/logo.svg";
import RingLogo from "./../assets/ring.svg";
import CartLogo from "./../assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { state } = useMovieDetails();
  const { darktheme, setDarkTheme } = useTheme();

  const handleCardShow = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <header>
        {showCart && <CartDetails onClose={() => setShowCart(false)} />}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="/">
            <img src={Logo} width="139" height="26" alt="Logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={RingLogo} width="24" height="24" alt="Ring" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkTheme(!darktheme)}
              >
                <img
                  src={darktheme ? SunLogo : MoonLogo}
                  width="24"
                  height="24"
                  alt="Moon"
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleCardShow}
              >
                <img src={CartLogo} width="24" height="24" alt="Cart" />
                {state.cartData.length > 0 && (
                  <span className="bg-primary text-[#171923] rounded-full w-4 h-4 text-center text-xs absolute -top-1 -right-1">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
