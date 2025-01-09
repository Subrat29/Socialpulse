import PropTypes from 'prop-types'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

// Dummy data - replace with actual data fetching logic in the future
const dummyData = {
  carousel: { likes: 1200, comments: 300, shares: 150 },
  reel: { likes: 2000, comments: 500, shares: 300 },
  static: { likes: 800, comments: 100, shares: 50 },
}

const postTypes = ['carousel', 'reel', 'static']

const colors = {
  likes: "#8884d8",
  comments: "#82ca9d",
  shares: "#ffc658"
}

export default function EngagementMetricsChart({ selectedPostType }) {
  const chartData = postTypes.map(postType => ({
    name: postType.charAt(0).toUpperCase() + postType.slice(1),
    ...dummyData[postType]
  }))

  // Move the selected post type to the beginning of the array
  const sortedChartData = [
    chartData.find(item => item.name.toLowerCase() === selectedPostType),
    ...chartData.filter(item => item.name.toLowerCase() !== selectedPostType)
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={sortedChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="likes" fill={colors.likes} name="Likes" />
        <Bar dataKey="comments" fill={colors.comments} name="Comments" />
        <Bar dataKey="shares" fill={colors.shares} name="Shares" />
      </BarChart>
    </ResponsiveContainer>
  )
}

EngagementMetricsChart.propTypes = {
  selectedPostType: PropTypes.oneOf(['carousel', 'reel', 'static']).isRequired,
}

