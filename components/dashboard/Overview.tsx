import { OverviewType } from "@/types"
import OverviewItem from "./OverviewItem"

const Overview = ({ overviewData } : { overviewData: OverviewType[] }) => {
  return (
    <div className="p-5 bg-white w-full rounded-lg">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {overviewData.map((item: OverviewType, idx: number) => (
          <OverviewItem key={idx} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Overview