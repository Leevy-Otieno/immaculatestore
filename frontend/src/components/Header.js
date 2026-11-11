import React, { useContext, useState } from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser, FaBars, FaXmark } from "react-icons/fa6";
import { FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import ROLE from "../common/role";
import Context from "../context";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const allProductsQuery =
    "category=Mens Perfumes&category=watches&category=unisex perfumes&category=women's fragrances&category=body Sprays & mists&category=perfume gift sets&category=personalized & custom gifts&category=for him valentines gift&category=For Her Valentine gift&category=gift boxes&category=love notes & gift cards";
  const giftsQuery =
    "category=perfume gift sets&category=personalized & custom gifts&category=for him valentines gift&category=For Her Valentine gift&category=gift boxes&category=love notes & gift cards";

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });
    const data = await fetchData.json();
    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      setMenuDisplay(false);
      navigate("/");
    }
    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <header className="h-16 lg:h-24 shadow-md bg-white/95 backdrop-blur-md fixed w-full z-40 border-b border-slate-100 transition-all duration-300">
      <div className="h-full container mx-auto px-4 max-w-6xl flex flex-col justify-center relative">
        {/* ─── TIER 1: BRAND LOGO & UTILITIES HUB ─── */}
        <div className="flex items-center justify-between w-full lg:h-12">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileNavOpen((prev) => !prev)}
              className="text-xl text-slate-700 hover:text-amber-600 block lg:hidden focus:outline-none transition-colors"
            >
              {mobileNavOpen ? <FaXmark /> : <FaBars />}
            </button>

            <div className="flex items-center gap-2 transform hover:scale-102 transition-transform duration-200">
              <Link
                to={"/"}
                className="flex items-center gap-2 group"
                onClick={() => setMobileNavOpen(false)}
              >
                <Logo w={65} h={40} />
                <span className="font-serif font-bold text-base md:text-xl tracking-wider text-slate-900 group-hover:text-amber-600 transition-colors duration-300 uppercase whitespace-nowrap">
                  Joyce{" "}
                  <span className="text-amber-600 font-light lowercase italic capitalize">
                    Perfumier
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center w-full justify-between max-w-sm border border-slate-200 rounded-full focus-within:border-amber-500 focus-within:shadow-md pl-4 bg-slate-50 focus-within:bg-white transition-all duration-300 group mx-4">
            <input
              type="text"
              placeholder="Search luxury fragrance collections..."
              className="w-full outline-none bg-transparent text-xs text-slate-700 placeholder-slate-400 font-light"
              onChange={handleSearch}
              value={search}
            />
            <button
              aria-label="Search Submit"
              className="text-xs min-w-[45px] h-8 bg-amber-600 hover:bg-amber-700 flex items-center justify-center rounded-r-full text-white transition-colors duration-200 shadow-sm"
            >
              <GrSearch />
            </button>
          </div>

          <div className="flex items-center gap-4 md:gap-5 shrink-0">
            <div className="relative flex justify-center">
              {user?._id ? (
                <div
                  className="text-2xl text-slate-700 hover:text-amber-600 cursor-pointer relative flex justify-center p-1 rounded-full hover:bg-slate-50 transition-all duration-200"
                  onClick={() => setMenuDisplay((preve) => !preve)}
                >
                  {user?.profilePic ? (
                    <img
                      src={user?.profilePic}
                      className="w-8 h-8 rounded-full border border-slate-200 object-cover shadow-sm"
                      alt={user?.name}
                    />
                  ) : (
                    <FaRegCircleUser />
                  )}
                </div>
              ) : (
                <Link
                  to={"/login"}
                  className="text-xl text-slate-600 hover:text-amber-600 p-1 rounded-full hover:bg-slate-50 transition-all duration-200 block"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <FaRegCircleUser />
                </Link>
              )}

              {menuDisplay && (
                <div className="absolute bg-white top-12 right-0 h-fit p-1.5 shadow-xl border border-slate-100 rounded-xl min-w-[160px] z-50">
                  <nav className="flex flex-col gap-0.5">
                    {user?.role === ROLE.ADMIN && (
                      <Link
                        to={"/admin-panel/all-products"}
                        className="whitespace-nowrap block text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 p-2.5 rounded-lg transition-all"
                        onClick={() => {
                          setMenuDisplay(false);
                          setMobileNavOpen(false);
                        }}
                      >
                        ⚙️ Admin Panel
                      </Link>
                    )}
                    <Link
                      to={"/cart"}
                      className="whitespace-nowrap block text-xs font-medium text-slate-700 hover:bg-slate-50 p-2.5 rounded-lg transition-all md:hidden"
                      onClick={() => {
                        setMenuDisplay(false);
                        setMobileNavOpen(false);
                      }}
                    >
                      🛒 My Shopping Cart
                    </Link>
                    {user?._id && (
                      <button
                        onClick={handleLogout}
                        className="w-full text-left text-xs font-medium text-rose-600 hover:bg-rose-50 p-2.5 rounded-lg transition-all border-t border-slate-100 mt-1"
                      >
                        Logout
                      </button>
                    )}
                  </nav>
                </div>
              )}
            </div>

            {user?._id && (
              <Link
                to={"/cart"}
                className="text-lg text-slate-700 hover:text-amber-600 p-1.5 rounded-full hover:bg-slate-50 relative transition-all duration-200 group"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>
                  <FaShoppingCart className="group-hover:scale-105 transition-transform" />
                </span>
                {context?.cartProductCount > 0 && (
                  <div className="bg-amber-600 text-white w-4 h-4 rounded-full flex items-center justify-center absolute top-0 right-0 shadow-sm">
                    <p className="text-[10px] font-bold">
                      {context?.cartProductCount}
                    </p>
                  </div>
                )}
              </Link>
            )}

            <div className="hidden sm:block shrink-0">
              <Link
                to={`/product-category?${allProductsQuery}`}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-sm hover:shadow-md transition-all duration-200 block text-center transform hover:-translate-y-0.5 active:translate-y-0 text-[11px]"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>

        {/* ─── TIER 2: DESKTOP CORE STORE NAVIGATION ROW ─── */}
        <nav className="hidden lg:flex items-center justify-center gap-10 text-xs uppercase tracking-widest font-semibold text-slate-600 border-t border-slate-50 pt-2 mt-1 h-8">
          <Link
            to={`/product-category?${allProductsQuery}`}
            className="hover:text-amber-600 transition-colors pb-1 hover:border-b-2 hover:border-amber-600"
          >
            All Products
          </Link>
          <Link
            to="/product-category?category=Mens Perfumes"
            className="hover:text-amber-600 transition-colors pb-1 hover:border-b-2 hover:border-amber-600"
          >
            Perfumes
          </Link>
          <Link
            to="/product-category?category=watches"
            className="hover:text-amber-600 transition-colors pb-1 hover:border-b-2 hover:border-amber-600"
          >
            Watches
          </Link>
          <Link
            to={`/product-category?${giftsQuery}`}
            className="hover:text-amber-600 transition-colors pb-1 hover:border-b-2 hover:border-amber-600"
          >
            Gifts
          </Link>
          <Link
            to="/about-us"
            className="hover:text-amber-600 transition-colors pb-1 hover:border-b-2 hover:border-amber-600"
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-amber-600 transition-colors pb-1 hover:border-b-2 hover:border-amber-600"
          >
            Contact Us
          </Link>
        </nav>

        {/* ─── 📱 MOBILE OVERLAY DROPDOWN INTERACTIVE PANEL ─── */}
        {mobileNavOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-16 z-50 bg-white/95 border-b border-slate-200 shadow-lg backdrop-blur-md">
            <div className="container mx-auto max-w-6xl px-4 py-4">
              <nav className="flex flex-col gap-2">
                <Link
                  to={`/product-category?${allProductsQuery}`}
                  className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors py-2 border-b border-slate-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  All Products
                </Link>
                <Link
                  to="/product-category?category=Mens Perfumes"
                  className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors py-2 border-b border-slate-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Perfumes
                </Link>
                <Link
                  to="/product-category?category=watches"
                  className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors py-2 border-b border-slate-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Premium Watches
                </Link>
                <Link
                  to={`/product-category?${giftsQuery}`}
                  className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors py-2 border-b border-slate-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Gifts
                </Link>
                <Link
                  to="/about-us"
                  className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors py-2 border-b border-slate-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us"
                  className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors py-2"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  to={`/product-category?${allProductsQuery}`}
                  className="mt-2 inline-flex justify-center rounded-full bg-amber-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-amber-700 transition-colors"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Explore Collection
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
