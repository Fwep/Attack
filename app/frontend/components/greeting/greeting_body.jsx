import React from 'react';
import { Link } from 'react-router-dom';

// <div>
//   <h2>The hub for your team and your work</h2>
//   <p className="greeting-blurb">
//     Attack is a place where your team comes together to collaborate,
//     important information can be found by the right people, and your
//     tools pipe in information when and where you need it.
//   </p>
// </div>

const GreetingBody = () => (
  <div className="main-greeting-container">
    <img className="cooler hero_content"
    src="/assets/batman_and_superman_water_cooler.jpg"
    alt="Attack brings all your communication together"
    />

    <div className="greeting_body hero_content">
      <h1 className="greeting-header">Where Saving the World Happens</h1>
      <p className="greeting-blurb">
        When your team needs to kick butt, hire a new English butler,
        deploy an AI super-assistant, review a battle plan, finalize
        next year's reparations budget, measure a mutant's vitals,
        or simply plan your next office meeting, and more, Attack has
        you covered.
      </p>
    </div>

    <div className="signin">
      <p>dsafsdf</p>
    </div>

  </div>
);

export default GreetingBody;
