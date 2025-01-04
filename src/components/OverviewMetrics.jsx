import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const metrics = [
  { title: "Total Posts", value: "1,234" },
  { title: "Total Likes", value: "45,678" },
  { title: "Total Comments", value: "12,345" },
  { title: "Total Shares", value: "6,789" },
]

export default function OverviewMetrics() {
  return (
    <>
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

