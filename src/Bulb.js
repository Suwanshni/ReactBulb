import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Bulb.css';
import onbulb from './onbulb.png';
import bulboff from './bulboff.png';

function OnOffFunction() {
  const [initialVal, updateVal] = useState(false);

  function check() {
    updateVal((value) => !(value));
  }

  return (
    <div>
      <center>
        {initialVal ? (
            <div>
                <img src={onbulb} alt="Bulb On" height="300px" width="200px"/>
                <h1 class="on">The bulb is ON</h1>
            </div>
        ) : (
            <div>
                <img src={bulboff} alt="Off Bulb" height="300px" width="190px"/>
                <h1 class="off">The bulb is OFF</h1>
            </div>
        )}
        <button type="button" className="btn btn-secondary btn-lg" onClick={check}>
          Switch
        </button>
      </center>
    </div>
  );
}

export default OnOffFunction;
