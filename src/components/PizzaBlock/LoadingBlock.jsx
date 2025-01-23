import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (  
        <ContentLoader 
        className='pizza-block'
          speed={2}
          width={280}
          height={460}
          viewBox="0 0 280 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="140" cy="108" r="104" /> 
          <rect x="0" y="230" rx="3" ry="3" width="280" height="26" /> 
          <rect x="0" y="273" rx="7" ry="7" width="280" height="84" /> 
          <rect x="137" y="308" rx="0" ry="0" width="46" height="1" /> 
          <rect x="1" y="366" rx="3" ry="3" width="0" height="24" /> 
          <rect x="6" y="377" rx="3" ry="3" width="97" height="21" /> 
          <rect x="180" y="368" rx="20" ry="20" width="97" height="34" />
        </ContentLoader>
        )
}

export default LoadingBlock
