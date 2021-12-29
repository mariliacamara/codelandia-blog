import Head from "next/head";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <div>
      <Head>
        <title>Codelandia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="headerTitle">
          <h1 className="siteTitle">Codelândia</h1>
          <Navbar />
        </div>
        <form className="form">
          <input
            className="searchInput"
            type="text"
            placeholder="Pesquise no blog"
          />
        </form>
      </header>
      <div className="container">{props.children}</div>

      <style jsx>{`
        header {
          background: linear-gradient(88.27deg, #574ae8 0%, #3ea1db 100%);
          padding: 2rem 2rem 3rem 2rem;
          font-style: normal;
          font-weight: 200;
          font-size: 14px;
          line-height: 30px;
          text-align: right;
          color: #ffffff;
        }

        .headerTitle {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .form input {
          width: 100%;
          box-sizing: border-box;
          margin-top: 3rem;
          padding: 1rem;
          background-color: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 5px;
          color: #fff;
        }

        .form input::placeholder {
          color: #fff;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
          opacity: 0.5;
        }

        @media (min-width: 900px) {
          .container {
            margin: 0rem 10rem;
          }

          header {
            padding: 2rem 10rem 3rem 10rem;
          }
        }
      `}</style>
    </div>
  );
};
export default Header;
