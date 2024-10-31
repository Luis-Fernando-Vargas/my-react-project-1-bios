import React from "react";
import '../styles/bios.css'

function Bio(props){
  return(
  <div className='container-bios'>
    <img 
      className='imagen-fernando' 
      src={require(`../images/${props.image}.png`)}
      alt = 'Image Fernando' />
    <div className='container-text'>
      <p className='publisher-name'><strong>{props.name}</strong> from {props.country}</p>
      <p className='publisher-profession'>Profession: <strong>{props.profession}</strong></p>
      <p className='publisher-bio-text'>"{props.bioStory}"</p>
    </div>
  </div>
  );
}
export default Bio;