import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import './Pricing.css';

function Pricing() {
  const { texts } = useContext(LanguageContext);

  return (
    <div className="pricing">
      <h2>{texts.pricingPlans}</h2>
      <div className="plans">
        <div className="plan">
          <h3>{texts.basicPlan}</h3>
          <p>{texts.basicPlanDescription}</p>
          <ul>
            <li>{texts.architecturalDesignFile}</li>
          </ul>
          <a href="https://t.me/Deisgn_hub" className="button">{texts.chooseBasic}</a>
        </div>
        <div className="plan">
          <h3>{texts.standardPlan}</h3>
          <p>{texts.standardPlanDescription}</p>
          <ul>
            <li>{texts.architecturalDesignFile}</li>
            <li>{texts.structuralDesignFile}</li>
          </ul>
          <a href="https://t.me/Deisgn_hub" className="button">{texts.chooseStandard}</a>
        </div>
        <div className="plan">
          <h3>{texts.premiumPlan}</h3>
          <p>{texts.premiumPlanDescription}</p>
          <ul>
            <li>{texts.architecturalDesignFile}</li>
            <li>{texts.structuralDesignFile}</li>
            <li>{texts.sanitaryLayoutFile}</li>
            <li>{texts.electricalLayoutFile}</li>
          </ul>
          <a href="https://t.me/Deisgn_hub" className="button">{texts.choosePremium}</a>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
