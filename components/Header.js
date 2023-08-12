//The Header component provides a consistent and visually appealing header section for the website, allowing users to easily navigate to different categories of jokes.
import Link from "next/link";

const Header = () => (
  <header className="header">
    {/* Header container */}
    <div className="logo-container">
      {/* Logo */}
      <h1 className="heading">Hilarius Jokes</h1>
    </div>
    <nav className="nav-links">
      {/* Navigation links */}
      <Link href="/programming">
        <span className="nav-link">Programming</span>
      </Link>
      <Link href="/puns">
        <span className="nav-link">Puns</span>
      </Link>
      <Link href="/spooky">
        <span className="nav-link">Spooky</span>
      </Link>
      <Link href="/christmas">
        <span className="nav-link">Christmas</span>
      </Link>
    </nav>

    <style jsx>{`
      .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid #dedede;
        background-color: black;
        color: white;
      }

      .logo-container {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
      }

      .heading {
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;
      }

      .nav-links {
        display: flex;
        align-items: center;
      }

      .nav-link {
        margin-right: 1rem;
        font-size: 1.2rem;
        font-weight: bold;
        color: white;
        text-decoration: none;
      }

      /* Media query for smaller screens */
      @media (max-width: 600px) {
        .heading {
          font-size: 1.2rem;
        }

        .nav-link {
          font-size: 1rem;
        }
      }
    `}</style>
  </header>
);

export default Header;
