import React from 'react'

function Alert(props) {


  return (
    // props.alert && =samja hich condition fasle zali tr pudhcha code execute nahi honar
    // but true zali ki honar
   <div style={{height : '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{(props.alert.type)}</strong>:{props.alert.msg}                   
          
            </div>}

            </div>
            
   
  )
}

export default Alert