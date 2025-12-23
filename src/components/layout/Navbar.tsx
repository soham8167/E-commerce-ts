
const Navbar = () => {
  const links = ["About Bhoomi", "Combos", "Fruits", "Veggies", "Exotic", "Subscriptions","Recipies"];

  return (
    <nav>
      <ul className="flex gap-5 text-sm font-medium">
        {links.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-yellow-300 "
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
