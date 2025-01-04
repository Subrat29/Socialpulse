import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { Loader2 } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import EngagementMetrics from '../components/EngagementMetrics'
import GPTInsights from '../components/GPTInsights'
import OverviewMetrics from '../components/OverviewMetrics'
import PostPerformanceChart from '../components/PostPerformanceChart'
import Chatbot from '../components/Chatbot'

const postTypes = [
  { value: "carousel", label: "Carousel" },
  { value: "reels", label: "Reels" },
  { value: "static", label: "Static Images" },
  { value: "stories", label: "Stories" },
  { value: "igtv", label: "IGTV" },
]

const demoMetrics = {
  carousel: { postType: "Carousel", averageLikes: 1000, averageComments: 50, averageShares: 25 },
  reels: { postType: "Reels", averageLikes: 1500, averageComments: 100, averageShares: 75 },
  static: { postType: "Static Images", averageLikes: 500, averageComments: 30, averageShares: 10 },
  stories: { postType: "Stories", averageLikes: 800, averageComments: 20, averageShares: 5 },
  igtv: { postType: "IGTV", averageLikes: 700, averageComments: 40, averageShares: 15 },
}

export default function AnalyticsPage() {
  const [postType, setPostType] = useState('')
  const [metrics, setMetrics] = useState(null)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const fetchMetrics = async (selectedPostType) => {
    setLoading(true)
    try {
      // Simulating API call with demo data
      // Artificial delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const data = demoMetrics[selectedPostType]
      if (data) {
        setMetrics(data)
        toast({
          title: "Data Updated",
          description: `Showing metrics for ${data.postType}`,
        })
      } else {
        throw new Error('Invalid post type')
      }
    } catch (error) {
      console.error('Error fetching metrics:', error)
      toast({
        title: "Error",
        description: "Failed to fetch metrics. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handlePostTypeChange = (value) => {
    setPostType(value)
    fetchMetrics(value)
  }

  return (
    <div className="container mx-auto py-10 relative">
      <h1 className="text-3xl font-bold mb-8">Social Media Performance Analysis</h1>
      
      <Tabs defaultValue="input" className="space-y-4">
        <TabsList>
          <TabsTrigger value="input">Input</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="input">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Select Post Type</CardTitle>
              <CardDescription>Choose a post type to see engagement metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Select onValueChange={handlePostTypeChange} value={postType}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select post type" />
                  </SelectTrigger>
                  <SelectContent>
                    {postTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              </div>
            </CardContent>
          </Card>

          {metrics && <EngagementMetrics metrics={metrics} />}
        </TabsContent>

        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <OverviewMetrics />
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Post Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <PostPerformanceChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights">
          <GPTInsights />
        </TabsContent>
      </Tabs>

      <Chatbot />
    </div>
  )
}