import React from 'react'
import Image from 'next/image';
import styles from "@/app/page.module.css";
import Heading from "@/app/components/Heading/Heading";
import { experiences, allProjects } from './constants';

// Icons
import { TbBrandNextjs } from "react-icons/tb";
import { BsGit, BsGithub } from "react-icons/bs";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaBootstrap, FaFigma } from "react-icons/fa";
import Link from 'next/link';

const Home = () => {
  
  return (
    <main className={styles.app__home}>
      {/* Section 1 - Hero */}

      <section className={styles.home__section1}>
        <div className={styles.section1__center}>
          {/* Side 1 */}
          <div className={styles.section1__side1}>
            <h3>Web Developer | UX Learner</h3>
            <h2>Hello! This is Nagateja. Here&rsquo;s my</h2>
            <h1>Portfolio</h1>
            <p>Checkout my portfolio, And express your Intrest.</p>
          </div>

          {/* Side 2 */}
          <div className={styles.section1__side2}>
            <Image src={"/Hero.svg"} alt="Portfolio" width={640} height={480} />
          </div>
        </div>
      </section>

      {/* Section 1 - Hero */}

      {/* Section 2 - Tools */}

      <section className={styles.home__section2}>
        <div className={styles.section2__center}>
          <Heading title={"Tools"} />

          <div className={styles.section2__main}>
            <FaHtml5 color="#f06529" fontSize={80} />
            <FaCss3Alt color="#2965f1" fontSize={80} />
            <FaJs color="#f0db4f" fontSize={80} />
            <SiTailwindcss color="#3490dc" fontSize={80} />
            <FaBootstrap color="#59287a" fontSize={80} />
            <FaReact color="#61dafb" fontSize={80} />
          </div>

          <div className={styles.section2__main}>
            <BsGit color="#f34f29" fontSize={80} />
            <BsGithub color="#232323" fontSize={80} />
            <FaFigma color="#000000" fontSize={80} />
            <FaSass color="#cc6699" fontSize={80} />
            <SiTypescript color="#007acc" fontSize={80} />
            <TbBrandNextjs color="#000000" fontSize={80} />
          </div>
        </div>
      </section>

      {/* Section 2 - Tools */}

      {/* Section 3 - Experiences */}

      <section className={styles.home__section3}>
        <div className={styles.section3__center}>
          <Heading title={"Learning Experience"} color="#FFFFFF" />

          <div className={styles.section3__main}>
            <p>
              I am a Front-end Web Developer with required Industry Knowledge to
              build a complete client side of Application using most advanced
              and top-notch tools out there.
            </p>

            <div className={styles.section3__data}>
              {experiences.map((item) => {
                return (
                  <div key={item.id} className={styles.each__experience}>
                    <div className={styles.exp__details}>
                      <h3>
                        {item.id}. {item.experience}
                      </h3>
                      <p>{item.information}</p>
                    </div>

                    <div className={styles.exp__image}>
                      <Image
                        src={item.image}
                        alt={item.experience}
                        width={300}
                        height={270}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Experiences */}

      {/* Section 4 - Projects */}

      <section className={styles.home__section4}>
        <div className={styles.section4__center} id="projects">
          <Heading title={"My Works"} color="#ffffff" />

          <div className={styles.section4__main}>
            {/* Personal Projects */}

            <div className={styles.projects}>
              <h2>Personal Projects</h2>

              <div className={styles.projects__list}>
                {allProjects.Personal.map((item) => {
                  return (
                    <div key={item.id} className={styles.each__project}>
                      <span>{item.id < 10 ? `0${item.id}` : item.id}</span>
                      <h3>{item.projectName}</h3>
                      <p>{item.projectDesc}</p>
                      <Image
                        src={item.projectImage}
                        alt={item.projectName}
                        width={600}
                        height={280}
                      />
                      <div className={styles.project__links}>
                        <Link href={item.githubLink} target="_blank">
                          Github
                        </Link>
                        <Link href={item.websiteLink} target="_blank">
                          Site
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Industry Projects */}

            <div className={styles.projects}>
              <h2>Industry Projects</h2>

              <div className={styles.projects__list}>
                {allProjects.Industry.map((item) => {
                  return (
                    <div key={item.id} className={styles.each__project}>
                      <span>{item.id < 10 ? `0${item.id}` : item.id}</span>
                      <h3>{item.projectName}</h3>
                      <p>{item.projectDesc}</p>
                      <Image
                        src={item.projectImage}
                        alt={item.projectName}
                        width={600}
                        height={280}
                      />
                      <div className={styles.project__links}>
                        <Link href={item.websiteLink} target="_blank">
                          Site
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Projects */}
    </main>
  );
}

export default Home