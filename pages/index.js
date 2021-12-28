import Head from 'next/head'

export default function Home() {
  return (
    <div className="content">
      <Head>
        <title>Codelandia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="header">
          <div className="headerTitle">
            <h1 className="siteTitle">Codelândia</h1>
            <h2 className="blogTitle">blog</h2>
          </div>
          <form className="form">
            <input
              className="searchInput"
              type="text"
              placeholder="Pesquise no blog"
            />
          </form>
        </div>

        <div className="container">
          <article>
            <div className="articleHeader">
              <div className="date">02 de jul. 2021</div>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.25 7.46875C23.1239 6.9753 22.9293 6.50194 22.6718 6.0625C22.4245 5.60536 22.1083 5.18902 21.7343 4.82812C21.1921 4.28771 20.55 3.85786 19.8437 3.5625C18.4221 2.97904 16.8278 2.97904 15.4062 3.5625C14.7386 3.84506 14.1253 4.2416 13.5937 4.73437L13.5156 4.82812L12.5 5.84375L11.4843 4.82812L11.4062 4.73437C10.8746 4.2416 10.2613 3.84506 9.5937 3.5625C8.17207 2.97904 6.57783 2.97904 5.1562 3.5625C4.44992 3.85786 3.80781 4.28771 3.26558 4.82812C2.52396 5.54973 1.99897 6.4644 1.74995 7.46875C1.61747 7.97878 1.55441 8.50435 1.56245 9.03125C1.56245 9.52656 1.62495 10.0203 1.74995 10.5C1.88094 10.9844 2.0698 11.4513 2.31245 11.8906C2.57451 12.3422 2.89498 12.7572 3.26558 13.125L12.5 22.3594L21.7343 13.125C22.1046 12.7609 22.4218 12.3437 22.6718 11.8906C23.1793 11.0236 23.4438 10.0359 23.4375 9.03125C23.4456 8.50435 23.3825 7.97877 23.25 7.46875ZM21.6875 10.0156C21.5003 10.7296 21.1285 11.3816 20.6093 11.9062L12.4687 20.0312L4.32808 11.9062C4.0628 11.6391 3.83185 11.3399 3.64058 11.0156C3.46059 10.6948 3.31899 10.3539 3.2187 10C3.13864 9.64612 3.09673 9.28468 3.0937 8.92187C3.09582 8.54869 3.13772 8.1768 3.2187 7.8125C3.31605 7.45756 3.45779 7.11632 3.64058 6.79687C3.82808 6.46875 4.05933 6.17187 4.32808 5.90625C4.72948 5.51022 5.20104 5.19232 5.7187 4.96875C6.76185 4.55144 7.92555 4.55144 8.9687 4.96875C9.48433 5.18281 9.94995 5.49687 10.3437 5.89062L12.4687 8.03125L14.5937 5.89062C14.9872 5.49618 15.4544 5.18294 15.9687 4.96875C17.0118 4.55144 18.1756 4.55144 19.2187 4.96875C19.7359 5.19219 20.2078 5.51094 20.6093 5.90625C20.8812 6.16406 21.1093 6.46406 21.2812 6.79687C21.6431 7.4351 21.8316 8.15694 21.8281 8.89062C21.8493 9.26816 21.8178 9.64681 21.7343 10.0156H21.6875Z"
                  fill="#574AE8"
                />
              </svg>
            </div>

            <h1 className="title">Agora é oficial: o Windows 11 está vindo</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis
              lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
            </p>
          </article>

          <article>
            <div className="articleHeader">
              <div className="date">02 de jul. 2021</div>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.25 7.46875C23.1239 6.9753 22.9293 6.50194 22.6718 6.0625C22.4245 5.60536 22.1083 5.18902 21.7343 4.82812C21.1921 4.28771 20.55 3.85786 19.8437 3.5625C18.4221 2.97904 16.8278 2.97904 15.4062 3.5625C14.7386 3.84506 14.1253 4.2416 13.5937 4.73437L13.5156 4.82812L12.5 5.84375L11.4843 4.82812L11.4062 4.73437C10.8746 4.2416 10.2613 3.84506 9.5937 3.5625C8.17207 2.97904 6.57783 2.97904 5.1562 3.5625C4.44992 3.85786 3.80781 4.28771 3.26558 4.82812C2.52396 5.54973 1.99897 6.4644 1.74995 7.46875C1.61747 7.97878 1.55441 8.50435 1.56245 9.03125C1.56245 9.52656 1.62495 10.0203 1.74995 10.5C1.88094 10.9844 2.0698 11.4513 2.31245 11.8906C2.57451 12.3422 2.89498 12.7572 3.26558 13.125L12.5 22.3594L21.7343 13.125C22.1046 12.7609 22.4218 12.3437 22.6718 11.8906C23.1793 11.0236 23.4438 10.0359 23.4375 9.03125C23.4456 8.50435 23.3825 7.97877 23.25 7.46875ZM21.6875 10.0156C21.5003 10.7296 21.1285 11.3816 20.6093 11.9062L12.4687 20.0312L4.32808 11.9062C4.0628 11.6391 3.83185 11.3399 3.64058 11.0156C3.46059 10.6948 3.31899 10.3539 3.2187 10C3.13864 9.64612 3.09673 9.28468 3.0937 8.92187C3.09582 8.54869 3.13772 8.1768 3.2187 7.8125C3.31605 7.45756 3.45779 7.11632 3.64058 6.79687C3.82808 6.46875 4.05933 6.17187 4.32808 5.90625C4.72948 5.51022 5.20104 5.19232 5.7187 4.96875C6.76185 4.55144 7.92555 4.55144 8.9687 4.96875C9.48433 5.18281 9.94995 5.49687 10.3437 5.89062L12.4687 8.03125L14.5937 5.89062C14.9872 5.49618 15.4544 5.18294 15.9687 4.96875C17.0118 4.55144 18.1756 4.55144 19.2187 4.96875C19.7359 5.19219 20.2078 5.51094 20.6093 5.90625C20.8812 6.16406 21.1093 6.46406 21.2812 6.79687C21.6431 7.4351 21.8316 8.15694 21.8281 8.89062C21.8493 9.26816 21.8178 9.64681 21.7343 10.0156H21.6875Z"
                  fill="#574AE8"
                />
              </svg>
            </div>

            <h1 className="title">Agora é oficial: o Windows 11 está vindo</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis
              lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
            </p>
          </article>

          <article>
            <div className="articleHeader">
              <div className="date">02 de jul. 2021</div>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.25 7.46875C23.1239 6.9753 22.9293 6.50194 22.6718 6.0625C22.4245 5.60536 22.1083 5.18902 21.7343 4.82812C21.1921 4.28771 20.55 3.85786 19.8437 3.5625C18.4221 2.97904 16.8278 2.97904 15.4062 3.5625C14.7386 3.84506 14.1253 4.2416 13.5937 4.73437L13.5156 4.82812L12.5 5.84375L11.4843 4.82812L11.4062 4.73437C10.8746 4.2416 10.2613 3.84506 9.5937 3.5625C8.17207 2.97904 6.57783 2.97904 5.1562 3.5625C4.44992 3.85786 3.80781 4.28771 3.26558 4.82812C2.52396 5.54973 1.99897 6.4644 1.74995 7.46875C1.61747 7.97878 1.55441 8.50435 1.56245 9.03125C1.56245 9.52656 1.62495 10.0203 1.74995 10.5C1.88094 10.9844 2.0698 11.4513 2.31245 11.8906C2.57451 12.3422 2.89498 12.7572 3.26558 13.125L12.5 22.3594L21.7343 13.125C22.1046 12.7609 22.4218 12.3437 22.6718 11.8906C23.1793 11.0236 23.4438 10.0359 23.4375 9.03125C23.4456 8.50435 23.3825 7.97877 23.25 7.46875ZM21.6875 10.0156C21.5003 10.7296 21.1285 11.3816 20.6093 11.9062L12.4687 20.0312L4.32808 11.9062C4.0628 11.6391 3.83185 11.3399 3.64058 11.0156C3.46059 10.6948 3.31899 10.3539 3.2187 10C3.13864 9.64612 3.09673 9.28468 3.0937 8.92187C3.09582 8.54869 3.13772 8.1768 3.2187 7.8125C3.31605 7.45756 3.45779 7.11632 3.64058 6.79687C3.82808 6.46875 4.05933 6.17187 4.32808 5.90625C4.72948 5.51022 5.20104 5.19232 5.7187 4.96875C6.76185 4.55144 7.92555 4.55144 8.9687 4.96875C9.48433 5.18281 9.94995 5.49687 10.3437 5.89062L12.4687 8.03125L14.5937 5.89062C14.9872 5.49618 15.4544 5.18294 15.9687 4.96875C17.0118 4.55144 18.1756 4.55144 19.2187 4.96875C19.7359 5.19219 20.2078 5.51094 20.6093 5.90625C20.8812 6.16406 21.1093 6.46406 21.2812 6.79687C21.6431 7.4351 21.8316 8.15694 21.8281 8.89062C21.8493 9.26816 21.8178 9.64681 21.7343 10.0156H21.6875Z"
                  fill="#574AE8"
                />
              </svg>
            </div>

            <h1 className="title">Agora é oficial: o Windows 11 está vindo</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis
              lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
            </p>
          </article>
        </div>
      </main>

      <style jsx>{`
        .container {
          margin: 0rem 2rem;
        }

        .header {
          background: linear-gradient(88.27deg, #574ae8 0%, #3ea1db 100%);
          padding: 2rem 2rem 3rem 2rem;
          font-style: normal;
          font-weight: 200;
          font-size: 14px;
          line-height: 30px;
          text-align: right;
          color: #ffffff;
        }

        .headerTitle,
        .articleHeader {
          display: flex;
          justify-content: space-between;
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

        article {
          margin: 3rem 0;
          padding: 2rem;
          background-color: #fff;
          box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
          border-radius: 5px;
        }

        article:first-child {
          margin-top: 6rem;
        }

        article .date {
          color: #717171;
        }

        article h1 {
          color: #1a202c;
        }

        article p {
          color: #717171;
        }

        @media (min-width: 900px) {
          .container {
            margin: 0rem 10rem;
          }

          .header {
            padding: 2rem 10rem 3rem 10rem;
          }

          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap");

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Lexend Deca", sans-serif;
          background-color: #f3f5f7;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
