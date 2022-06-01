import React from 'react'
import './footer.css'

const Footer = ({name,tool}) => {
  //the above is a clean code version of using react code with destructured 
  //  const footer = (props){ is an example of a normal prop declartions}
  // const tool = props.tools ;
  return (
    // brief demonstration of how props work .
    <div>
      Footer hello {name}
      <p > footer toools is {tool} </p>
     </div>
  )
}


// displating default props incase none is provided :

Footer.defaultProps = {

  name : "Okanda Stephen" ,
  tool : "figma"  

}

export default Footer