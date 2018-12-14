import React from 'react';
import { Link } from 'react-router-dom';

const GreetingBody = () => (
  <div className="greeting_body">
    <h1 id="headline">Where Saving the World Happens</h1>
    <img className="cooler"
    src="/assets/batman_and_superman_water_cooler.jpg"
    alt="Attack brings all your communication together"
    />
    <p className="greeting-blurb">
      When your team needs to kick butt, hire a new English butler,
      deploy some AI super-assistant, review a battle plan, finalize
      next year's reparations budget, measure a mutant's vitals,
      or simply plan your next office meeting, and more, Attack has
      you covered.
    </p>

    <h2>The hub for your team and your work</h2>
    <p className="greeting-blurb">
    Attack is a place where your team comes together to collaborate,
    important information can be found by the right people, and your
    tools pipe in information when and where you need it.
    </p>

  </div>
);

export default GreetingBody;
