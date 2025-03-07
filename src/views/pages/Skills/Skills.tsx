import { BiLogoSpringBoot, BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiHibernate, SiMysql } from "react-icons/si";
import { FaAws, FaDocker, FaStripe } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export function Skills() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg text-white p-4 sm:p-8">
      <div className="max-w-3xl sm:max-w-4xl text-center space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary">
          My Skills
        </h1>
        <p className="text-base sm:text-lg leading-relaxed">
          Here are some of the technologies and tools I have experience with. I
          enjoy learning new things and continuously improving my skill set.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          <i
            className="fab fa-java fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="Java"
          ></i>{" "}
          {/* Java */}
          <BiLogoSpringBoot
            className="text-white hover:text-primary hover:scale-105 transition-transform duration-300 text-6xl sm:text-6xl"
            title="Spring Boot"
          />
          <SiExpress
            className="text-white hover:text-primary hover:scale-105 transition-transform duration-300 text-6xl sm:text-6xl"
            title="Express.js"
          />
          <i
            className="fab fa-js-square fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="JavaScript"
          ></i>{" "}
          {/* JavaScript */}
          <i
            className="fab fa-react fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="React-Native"
          ></i>{" "}
          {/* React Native */}
          <i
            className="fab fa-python fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="Python"
          ></i>{" "}
          {/* Python */}
          <i
            className="fab fa-html5 fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="HTML"
          ></i>{" "}
          {/* HTML */}
          <i
            className="fab fa-css3-alt fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="CSS"
          ></i>{" "}
          {/* CSS */}
          <i
            className="fab fa-node fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="Node.js"
          ></i>{" "}
          {/* Node.js */}
          <i
            className="fab fa-bootstrap fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="Bootstrap"
          ></i>{" "}
          {/* Bootstrap */}
          <i
            className="fab fa-react fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="React"
          ></i>{" "}
          {/* React */}
          <i
            className="fab fa-angular fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="Angular.js"
          ></i>{" "}
          {/* Angular.js */}
          <i
            className="fab fa-flutter fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="Flutter"
          ></i>{" "}
          {/* Flutter */}
          <i
            className="fab fa-figma fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="Figma"
          ></i>{" "}
          {/* Figma */}
          <i
            className="fab fa-android fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="Android Studio"
          ></i>{" "}
          {/* Android Studio */}
          <i
            className="fab fa-git fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="Git"
          ></i>{" "}
          {/* Git */}
          <i
            className="fab fa-github fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="GitHub"
          ></i>{" "}
          {/* GitHub */}
          <i
            className="fab fa-gitlab fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="GitLab"
          ></i>{" "}
          {/* GitLab */}
          <i
            className="fab fa-npm fa-4x sm:fa-5x hover:text-primary hover:scale-105 transition-transform duration-300"
            title="npm"
          ></i>{" "}
          {/* npm */}
          <BiLogoMongodb
            className="text-white hover:text-primary hover:scale-105 transition-transform duration-300 text-6xl sm:text-6xl"
            title="MongoDB"
          />
          <SiHibernate
            className="text-white hover:text-primary hover:scale-105 transition-transform duration-300 text-6xl sm:text-6xl"
            title="Hibernate"
          />
          <SiMysql
            className="text-white hover:text-primary hover:scale-105 transition-transform duration-300 text-6xl sm:text-6xl"
            title="MySQL"
          />
          <BiLogoPostgresql 
            className="text-white hover:text-primary hover:scale-105 transition-transform duration-300 text-6xl sm:text-6xl"
            title="Postgresql"
          />
          <FaAws 
            className="text-white hover:text-primary hover:scale-105 transition-transform duration-300 text-6xl sm:text-6xl"
            title="AWS"
          />
          <RiTailwindCssFill 
            className="text-white hover:text-primary hover:scale-105 transition-transform duration-300 text-6xl sm:text-6xl"
            title="Tailwind CSS"
          />
          <FaDocker 
            className="text-white hover:text-primary hover:scale-105 transition-transform duration-300 text-6xl sm:text-6xl"
            title="Docker"
          />
          <FaStripe 
            className="text-white hover:text-primary hover:scale-105 transition-transform duration-300 text-6xl sm:text-6xl"
            title="Stripe"
          />
        </div>
      </div>
    </div>
  );
}
