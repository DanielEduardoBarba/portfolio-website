import Spline from '@splinetool/react-spline'

export default function SplineView({uri}) {
  return (
    <div style={{
      zIndex:0
    }} className="absolute w-full h-full">

      <Spline scene={uri} />
    </div>
  )
}