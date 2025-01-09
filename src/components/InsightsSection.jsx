import PropTypes from 'prop-types'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Dummy insights - replace with actual data or AI-generated insights in the future
const dummyInsights = {
  carousel: [
    "Carousels have 20% higher engagement than static posts",
    "Users spend 30% more time viewing carousel posts",
    "Carousel posts with 3-5 slides perform best"
  ],
  reel: [
    "Reels receive 2x more comments than other post types",
    "Short-form video content (15-30 seconds) performs best",
    "Reels with trending audio get 50% more views"
  ],
  static: [
    "Static posts with infographics get 3x more saves",
    "High-quality images increase engagement by 40%",
    "Posts with faces get 38% more likes"
  ]
}

export default function InsightsSection({ postType }) {
  const insights = dummyInsights[postType]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Insights for {postType} posts</CardTitle>
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

InsightsSection.propTypes = {
  postType: PropTypes.oneOf(['carousel', 'reel', 'static']).isRequired,
}

