import { Card } from "./Card";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function CardListSkeleton() {
  const cardsSkeleton=Array(12)
    .fill(null)
    .map((card,i)=>card=<Skeleton
       key={i} width={208} height={251} borderRadius={15}
       baseColor={"#76448A"} highlightColor={"#ffffff"} duration={1.8}
       style={{opacity:0.4}}
    />)
  return (
    <div className="w-full mt-6 grid grid-cols-1 gap-y-5 justify-center items-center lg:grid-cols-4 lg:gap-x-0 xl:grid-cols-6">
      {cardsSkeleton}
    </div>
  )
}
