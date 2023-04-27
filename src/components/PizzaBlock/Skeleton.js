import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <circle cx="123" cy="103" r="103" /> 
    <rect x="10" y="241" rx="0" ry="0" width="234" height="117" />
  </ContentLoader>
)

export default Skeleton