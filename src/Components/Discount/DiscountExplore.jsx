import React from 'react'
import './DiscountExplore.css'
import { assets } from '../../assets/assests'

const DiscountExplore = () => {
  return (
    <div className="discount-explore">
  <div className="discount-explore-container">
    <div className="discount-text">
      <h1>
        Get 12.5% OFF Our 4-Week <br />
        Meal Plan! Take Charge of <br />
        Your Health Today
      </h1>
      <p>
        Say goodbye to unhealthy choices, order your meal plan <br />
        today, enjoy expertly crafted, nutrient-packed meals, and <br />
        experience the power of wholesome eating. This is more <br />
        than just a meal plan; it’s a commitment to feeling your <br />
        best every day.
      </p>
      <h3>
        Don’t wait—take control of your health now and <br />
        grab this exclusive offer before it’s gone!
      </h3>
      <button className="btn">Order Now</button>
    </div>

    <div className="discount-image">
      <img src={assets.healthy_m} alt="Healthy Meal" />
    </div>
  </div>
</div>

  )
}

export default DiscountExplore