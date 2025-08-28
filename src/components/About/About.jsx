import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
// IMPORTANT: Make sure you have a profile picture in the 'src/assets/work_logo' folder
import profileImage from '../../assets/work_logo/profile.jpg'; 

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-4 leading-tight">
            Daksh Sahu
          </h2>
          {/* Skills Heading with Typing Effect */}
          {/* THEME: Changed color to primary */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-primary leading-tight">
            <span className="text-text-primary">I am a </span>
            <ReactTypingEffect
              text={[
                'Full-Stack Developer',
                'Machine Learning Engineer',
                'AI Enthusiast',
                'Competitive Programmer',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-primary">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          {/* THEME: Changed color to text-secondary */}
          <p className="text-base sm:text-lg md:text-lg text-text-secondary mb-10 mt-8 leading-relaxed">
            I am a passionate Full-Stack and Machine Learning Engineer with experience building robust, scalable applications. My expertise lies in developing backend microservices with Java and Spring Boot, creating dynamic frontends with React, and integrating AI/ML models to deliver intelligent solutions.
          </p>
          {/* Resume Button */}
          <a
            // IMPORTANT: Make sure this link points to YOUR resume
            href="https://drive.google.com/file/d/1weKgSBOE24FbOq45D45VdvMYCcCB1Re2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            // THEME: Replaced inline style with Tailwind classes for the new theme
            className="inline-block bg-primary hover:bg-blue-700 text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 shadow-lg shadow-primary/40"
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            // THEME: Changed border color to primary
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-primary rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Daksh Sahu"
              // THEME: Changed drop-shadow color to primary
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(37,99,235,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
