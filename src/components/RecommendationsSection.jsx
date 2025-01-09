import PropTypes from 'prop-types'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Dummy recommendations - replace with actual data or AI-generated recommendations in the future
const dummyRecommendations = {
  carousel: [
    "Create more carousel posts to boost engagement",
    "Experiment with different numbers of slides (3-5) to find the sweet spot",
    "Use a mix of images and videos in your carousels"
  ],
  reel: [
    "Focus on creating more short-form video content",
    "Utilize trending audio in your reels",
    "Experiment with different video lengths (15-30 seconds)"
  ],
  static: [
    "Create more infographic-style static posts",
    "Invest in high-quality imagery",
    "Include faces in your static posts when relevant"
  ]
}

export default function RecommendationsSection({ postType }) {
  const recommendations = dummyRecommendations[postType]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

RecommendationsSection.propTypes = {
  postType: PropTypes.oneOf(['carousel', 'reel', 'static']).isRequired,
}

