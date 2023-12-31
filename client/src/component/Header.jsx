import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <Link to="/">
          <h1 className="text-4xl font-bold">Auth App</h1>
        </Link>
        <ul className="flex space-x-6">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/sign-in">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
