import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="border-stone flex items-center justify-between border-stone-200 bg-red-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Food Rush Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
