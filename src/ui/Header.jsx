import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header>
      <Link to="/">Food Rush Co.</Link>

      <SearchOrder />
      <p>Albion</p>
    </header>
  );
}

export default Header;
