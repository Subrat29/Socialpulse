import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import PostTypeSelector from '@/components/PostTypeSelector'
import EngagementMetricsChart from '@/components/EngagementMetricsChart'
import InsightsSection from '@/components/InsightsSection'
import RecommendationsSection from '@/components/RecommendationsSection'

export default function AnalyticsPage() {
  const [postType, setPostType] = useState(null)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handlePostTypeChange = (selectedType) => {
    setLoading(true)
    setPostType(selectedType)
    // Simulating API call
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Data Updated",
        description: `Showing metrics for ${selectedType}`,
      })
    }, 1000)
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">SocialPulse Analytics</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Select Post Type</CardTitle>
        </CardHeader>
        <CardContent>
          <PostTypeSelector onSelectPostType={handlePostTypeChange} />
          {loading && <Loader2 className="h-8 w-8 animate-spin mx-auto mt-4" />}
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Engagement Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <EngagementMetricsChart selectedPostType={postType || 'carousel'} />
        </CardContent>
      </Card>

      {postType && !loading && (
        <div className="grid gap-8 md:grid-cols-2">
          <InsightsSection postType={postType} />
          <RecommendationsSection postType={postType} />
        </div>
      )}
    </div>
  )
}


