import React from 'react'

export const Slider2 = () => {
  return (
    <div id="slider">
    <input type="radio" name="slider" id="s1" defaultChecked/>
    <input type="radio" name="slider" id="s2"/>
    <input type="radio" name="slider" id="s3"/>
    <input type="radio" name="slider" id="s4"/>
    <label for="s1" id="slide1" style={{borderRadius:"40px"}}></label>
    <label for="s2" id="slide2"style={{borderRadius:"40px"}}></label>
    <label for="s3" id="slide3" style={{borderRadius:"40px"}}></label>
    <label for="s4" id="slide4" style={{borderRadius:"40px"}}></label>
  
 </div>
    
  )
}
