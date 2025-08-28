import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navmenu = [
    {
      title: "All Books",
      slug: "books",
    },
    {
      title: "Add Book",
      slug: "add-book",
    },
    {
      title: "Borrow Summary",
      slug: "borrow-summary",
    },
  ];
  return (
    <div>
      <header className="bg-gray-600 text-white py-4">
        <nav className="flex justify-between container mx-auto items-center">
          <Link to="" className="text-4xl font-bold">
            <span className="text-orange-500">Modern Library</span> 
          </Link>
          <ul className="flex gap-4 items-center">
            {navmenu.map((menu) => (
              <li key={menu.slug}>
                <NavLink to={menu.slug}>{menu.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;