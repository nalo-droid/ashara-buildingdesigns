import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <div className="pricing">
      <h2>Our Pricing Plans</h2>
      <div className="plans">
        <div className="plan">
          <h3>Basic</h3>
          <p>Includes only the architectural design file.</p>
          <ul>
            <li>✔ Architectural Design File</li>
          </ul>
          <a href="https://t.me/Deisgn_hub" className="button">Choose Basic</a>
        </div>
        <div className="plan">
          <h3>Standard</h3>
          <p>Includes both architectural and structural design files.</p>
          <ul>
            <li>✔ Architectural Design File</li>
            <li>✔ Structural Design File</li>
          </ul>
          <a href="https://t.me/Deisgn_hub" className="button">Choose Standard</a>
        </div>
        <div className="plan">
          <h3>Premium</h3>
          <p>Provides a comprehensive set of design files tailored to your specific land footprint.</p>
          <ul>
            <li>✔ Architectural Design File</li>
            <li>✔ Structural Design File</li>
            <li>✔ Sanitary Layout File</li>
            <li>✔ Electrical Layout File</li>
          </ul>
          <a href="https://t.me/Deisgn_hub" className="button">Choose Premium</a>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
