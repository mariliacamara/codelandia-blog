import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          color: #fff;
          list-style: none;
          display: flex;
        }
        ul li {
          font-family: "Lexend Deca", sans-serif;
          font-size: 18px;
          margin-right: 50px;
        }
        ul li:last-child {
          margin-right: 0;
        }
        ul li a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};
export default Navbar;
