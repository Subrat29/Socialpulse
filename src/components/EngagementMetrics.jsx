import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

export default function EngagementMetrics({ metrics }) {
  const chartData = [
    { name: 'Likes', value: metrics.averageLikes },
    { name: 'Comments', value: metrics.averageComments },
    { name: 'Shares', value: metrics.averageShares },
  ]

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Average Engagement Metrics for {metrics.postType}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Metric</TableHead>
              <TableHead>Average</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Likes</TableCell>
              <TableCell>{metrics.averageLikes}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Comments</TableCell>
              <TableCell>{metrics.averageComments}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shares</TableCell>
              <TableCell>{metrics.averageShares}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}