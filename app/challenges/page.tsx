import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award } from "lucide-react"

export default function ChallengesPage() {
  // This would be fetched from an API in a real application
  const challenges = [
    {
      id: 1,
      title: "Mobile Photography Masterclass",
      category: "Photography",
      description: "Showcase your best mobile photography skills and win rewards.",
      participants: 128,
      reward: "₹500",
      deadline: "2 days left",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Web Design Challenge",
      category: "Design",
      description: "Create a responsive landing page for a fictional product.",
      participants: 85,
      reward: "₹750",
      deadline: "5 days left",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Content Writing Sprint",
      category: "Writing",
      description: "Write a compelling blog post on technology trends.",
      participants: 64,
      reward: "₹300",
      deadline: "3 days left",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "Video Editing Challenge",
      category: "Video",
      description: "Edit a 1-minute promotional video from provided footage.",
      participants: 42,
      reward: "₹1000",
      deadline: "7 days left",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "Logo Design Contest",
      category: "Design",
      description: "Design a logo for a new eco-friendly startup.",
      participants: 156,
      reward: "₹1200",
      deadline: "4 days left",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "Coding Challenge: Algorithm",
      category: "Programming",
      description: "Solve a complex algorithm problem efficiently.",
      participants: 93,
      reward: "₹800",
      deadline: "6 days left",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Explore Challenges</h1>
          <p className="text-gray-500">
            Discover skill challenges across various categories and participate to win rewards.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              All Categories
            </Button>
            <Button variant="outline" size="sm">
              Design
            </Button>
            <Button variant="outline" size="sm">
              Programming
            </Button>
            <Button variant="outline" size="sm">
              Writing
            </Button>
            <Button variant="outline" size="sm">
              Photography
            </Button>
          </div>
          <Link href="/create">
            <Button className="bg-orange-600 hover:bg-orange-700">Create Challenge</Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="overflow-hidden">
              <img
                src={challenge.image || "/placeholder.svg"}
                alt={challenge.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">{challenge.category}</Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {challenge.deadline}
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-2">{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-500">{challenge.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{challenge.participants} participants</span>
                  </div>
                  <div className="flex items-center text-sm font-medium">
                    <Award className="h-4 w-4 mr-1 text-orange-600" />
                    <span>{challenge.reward}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/challenges/${challenge.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Challenge
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
