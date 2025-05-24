import React from 'react'
import './SofreshStory.css'
import { assets } from '../../../assets/assests'


const SofreshStory = () => {
  return (
    <div className="sofreshstory">
  <div className="sofreshstory-container" >
   
   
    <div className="sofreshstory-text">
      <h2>
       The So Fresh Story
      </h2>
      <p>
       SoFresh is Nigeria's pioneer and number one healthy food chain,
        providing fresh, delicious, nutrient-rich healthy meals and committed
         to promoting a healthy lifestyle. FRESH IS BEST and that is how we win every day, 
       selling a wide range of fresh salads, juices, smoothies, parfait, fiesta wraps, 
       sandwich and other quick on the go healthy meals.
      </p>

      <button className="btn">Read More</button>
    </div>

    <div className="sofreshstory-image">
      <img src={assets.theso_frsh} alt="Healthy Meal" />
    </div>
  </div>

 
</div>

  )
}
export default SofreshStory;