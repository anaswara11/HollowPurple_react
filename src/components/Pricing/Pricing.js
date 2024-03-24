import React from 'react';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import cardImage from '../../images/sheild.png';

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

 const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Select Mode</PricingHeading>
          <PricingContainer>
            <PricingCard to='/products'>
              <PricingCardInfo>
                <PricingCardIcon>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={cardImage} alt="Card" style={{ marginBottom: '5px', width: '30%' }} />
                </div>
                </PricingCardIcon>
                <PricingCardPlan><center>Continuous Vulnerability Checking</center></PricingCardPlan>
                <br></br>
                
                <PricingCardFeatures>
                  <PricingCardFeature>Enables automated and ongoing scanning for security weaknesses, providing real-time alerts to ensure proactive identification and resolution of potential risks.</PricingCardFeature>
                  
                </PricingCardFeatures>
                <Button primary>SELECT</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/products'>
              <PricingCardInfo>
              <PricingCardIcon>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={cardImage} alt="Card" style={{ marginBottom: '5px', width: '30%' }} />
                </div>
                </PricingCardIcon>
                <PricingCardPlan><center>Dynamic Application Security Testing</center></PricingCardPlan>
                <br></br>
                
                <PricingCardFeatures>
                  <PricingCardFeature>Dynamically evaluates running web applications for vulnerabilities, ensuring real-time threat detection and robust security measures.</PricingCardFeature>
                  
                </PricingCardFeatures>
                <Button primary>SELECT</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/products'>
              <PricingCardInfo>
              <PricingCardIcon>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={cardImage} alt="Card" style={{ marginBottom: '5px', width: '30%' }} />
                </div>
                </PricingCardIcon>
                <PricingCardPlan><center>Static Application Security Testing</center></PricingCardPlan>
                
                
                <PricingCardFeatures>
                  <PricingCardFeature>Scans source code or compiled code for security vulnerabilities, allowing for early detection and prevention of potential security risks within the application's codebase.</PricingCardFeature>
                  
                </PricingCardFeatures>
                <Button primary>SELECT</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/products'>
              <PricingCardInfo>
              <PricingCardIcon>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={cardImage} alt="Card" style={{ marginBottom: '5px', width: '30%' }} />
                </div>
                </PricingCardIcon>
                <PricingCardPlan><center>Vulnerability Assessment and Penetration Testing</center></PricingCardPlan>
                
                
                <PricingCardFeatures>
                  <PricingCardFeature>Systematically identifies weaknesses in software systems, providing comprehensive insights into potential security vulnerabilities and their impact.</PricingCardFeature>
                  
                </PricingCardFeatures>
                <Button primary>SELECT</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing