import React from 'react';
import { Typewriter } from 'react-simple-typewriter';


function Hometext() {
    return (
      <div >
        <h1>
          <Typewriter
            words={['Front End Developer.', 'React Developer.', 'UI Designer.']}
            loop={true}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
      </div>
    );
  }

export default Hometext;

