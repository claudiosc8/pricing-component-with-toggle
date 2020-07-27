import React, {useState} from 'react';
import Switch from "react-switch";
import {plans} from './data'
import './App.scss';

function App() {

  const [priceView, setPriceView] = useState('monthly')

  return (
      
      <section>
      <div className='container'>
        <h1>Our Pricing</h1>
        <div className='price-switch'>
          <label htmlFor='price-view-switch'>Annually</label>
          <Switch 
            id='price-view-switch'
            handleDiameter={24}
            height={32}
            width={56}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor={'transparent'}
            offColor={'transparent'}
            onChange={() => setPriceView(e => e === 'monthly' ? 'annually' : 'monthly')} checked={priceView === 'monthly'}
            />
          <label htmlFor='price-view-switch'>Monthly</label>
        </div>
        
      </div>

      <div id='pricing' className='container'>
          { plans && plans.map((plan, index) => {
              return (

                <div className={`plan-card${plan.featured ? ' featured' : ''}`} key={index}> 
                  <div className='plan-name'>{plan.name}</div>
                  <div className='plan-price'>
                    <span className='currency'>{plan.currency}</span>
                    <span className='price'>{plan.price[priceView]}</span>
                  </div>
                  <ul className='plan-features'>
                    {plan.features.map((feature, p) => <li key={p}>{feature}</li>)}
                  </ul>
                  <div className='button'>{plan.cta}</div>
                </div>

                )
          })}
        </div>
        </section>
  );

}

export default App;
