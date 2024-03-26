import { RevenueCard } from "./components/RevenueCard"

function app() {
  return (
    <div>
      <RevenueCard  title ={"amount pending"} amount={"93,34,444"} orderCount={12}/>
    </div>
  )
}

export default app