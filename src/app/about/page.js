import React from 'react'
import Image from 'next/image';
import styles from "./page.module.css";

export const metadata = {
  title: "Nagateja | About Me",
  description: "As a person know more about me and let's have an oppurtunity to talk & meet.",
};

const About = () => {
  return (
    <main className={styles.app__about}>
      {/* About Me */}

      <section className={styles.about__me}>
        <div className={styles.about__me_center}>

          {/* Side 1 */}

          <div className={styles.about__me_side1}>
            <div className={styles.image}>
              <Image src={"/Nagateja.jpg"} alt="Nagateja" width={200} height={220} />
              <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" 
                viewBox="-25 -25 250 250" className={styles.float}> 
                <defs>
                <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" >
                  <stop offset="0%" style={{ stopColor:'#141414', stopOpacity: '1.00'}} />
                  <stop offset="100%" style={{ stopColor:'#707070', stopOpacity: '1.00'}}  />
                </linearGradient>
                </defs>
                <path d="M140.9207894534591 8.75588243341015 C104.43249654380035 -8.179633638898782 9.277173303287253 48.45934404336929 0.7504096650907002 87.77221122390975 C-6.496234920477643 121.1830559693712 48.87223520402673 187.5708658089495 81.35065885417704 198.2456211483581 C103.83020789599145 205.6340242539533 159.48611358924413 190.10154337025136 171.62164785933726 169.78781811973408 C192.64012327743504 134.60489783577094 178.09495640687874 26.009737073117982 140.9207894534591 8.75588243341015Z" stroke="none" fill="url(#lgrad)"  />
              </svg>
            </div>
            <div className={styles.details}>
              <h2>Nagateja</h2>
              <p>Web Developer & UX Learner</p>
            </div>
          </div>

          {/* Side 2 */}

          <div className={styles.about__me_side2}>
            <p>Hello, I&apos;m Nagateja, a passionate front-end web developer with a strong foundation in industry-standard tools and a portfolio filled with exciting projects.</p>
            <p>My journey in the world of web development began with a deep curiosity and a desire to create visually stunning and user-friendly websites. Over the years, I&apos;ve honed my skills, staying ahead of the curve with the latest technologies and trends to deliver cutting-edge web experiences.</p>
            <p>One of the keys to my success is my extensive knowledge of industry-required tools and technologies. Whether it&apos;s crafting responsive layouts with HTML5 and CSS3, enhancing user interactivity through JavaScript, or optimizing performance with various frameworks, I&apos;ve got it covered. I&apos;m proficient in using modern development tools, libraries, and best practices to ensure that every project I undertake is not only visually appealing but also functionally robust.</p>
            <p>Thank you for visiting my portfolio website. I invite you to explore my work, get to know me better, and perhaps even consider collaborating on the next exciting project together. Let&apos;s bring your digital ideas to life and make the web a more engaging and beautiful place.</p>
          </div>

        </div>
      </section>

      {/* About Me */}
    </main>
  );
}

export default About;