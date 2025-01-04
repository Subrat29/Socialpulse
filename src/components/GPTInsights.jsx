import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const insights = [
  "Carousel posts have 20% higher engagement than static posts.",
  "Reels drive 2x more comments compared to other formats.",
  "Posts published between 6-8 PM receive 30% more likes on average.",
  "Using 5-7 hashtags results in 15% higher reach compared to posts with more or fewer hashtags.",
]

export default function GPTInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>GPT-Generated Insights</CardTitle>
        <CardDescription>AI-powered analysis of your social media performance</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}