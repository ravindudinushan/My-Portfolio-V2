import { Link } from "react-router-dom";
import CV from "../../../assets/pdf/Ravindu-Dinushan-CV.pdf";

export function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg text-primary">
      <div className="text-center space-y-6 sm:space-y-8 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg sm:text-xl max-w-xl sm:max-w-2xl mx-auto text-gray-200">
          Explore my work, learn more about my skills,
          <br className="hidden sm:block" />
          and discover the projects I've been working on.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* <a
            href="/My-Portfolio-V2/about"
            className="bg-primary text-bg px-6 py-3 rounded-lg font-semibold shadow-lg 
                    hover:scale-105 transition duration-300"
          >
            About Me
          </a> */}
          <Link
              to="/My-Portfolio-V2/about"
              className="bg-primary text-bg px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              About Me
            </Link>
          <a
            href={CV}
            download="Ravindu-Dinushan-Resume"
            className="bg-bg text-primary border 
                    border-primary px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Download CV
          </a>
        </div>
        <div className="mt-8">
          <div className="flex justify-center space-x-4 md:space-x-6">
            <a
              href="https://www.linkedin.com/in/ravindu-dinushan-60709227b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:scale-105 transition duration-300 text-lg"
            >
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a
              href="https://github.com/ravindudinushan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:scale-105 transition duration-300 text-lg"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://web.facebook.com/people/Ravindu-Dinushan/pfbid0A2QTtgYTDGJfQJADQtmtWWkiVYpXRSwVwbodBQGrMRDdN1QrtmHS9fBm7kE8tdDol/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:scale-105 transition duration-300 text-lg"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://x.com/Ravindu9966"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:scale-105 transition duration-300 text-lg"
            >
              <i className="fab fa-x-twitter fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
