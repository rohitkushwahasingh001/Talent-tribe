import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Award, Calendar, Clock, Share2, ThumbsUp, Users } from "lucide-react"

export default function ChallengePage({ params }: { params: { id: string } }) {
  // This would be fetched from an API in a real application
  const challenge = {
    id: params.id,
    title: "Mobile Photography Masterclass",
    category: "Photography",
    description:
      "Showcase your best mobile photography skills and win rewards. This challenge is designed to test your ability to capture stunning images using just your smartphone. No professional equipment needed - just your creativity and eye for composition.",
    longDescription:
      "In this challenge, participants will submit their best mobile photography work based on the theme 'Urban Life'. Photos must be taken on a smartphone without professional editing software. Basic adjustments for brightness, contrast, and color are allowed. The community will vote on submissions based on creativity, composition, and adherence to the theme.",
    creator: {
      name: "Priya Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Professional Photographer",
    },
    participants: 128,
    reward: "₹500",
    deadline: "April 15, 2025",
    timeLeft: "2 days left",
    image: "/placeholder.svg?height=400&width=800",
    rules: [
      "All photos must be taken on a mobile device",
      "Basic editing is allowed (brightness, contrast, etc.)",
      "No professional editing software",
      "Maximum 3 submissions per participant",
      "Photos must be original and taken by you",
      "Submission deadline is April 15, 2025",
    ],
    submissions: [
      {
        id: 1,
        user: "Rahul K.",
        avatar: "/placeholder.svg?height=40&width=40",
        image: "/placeholder.svg?height=200&width=300",
        votes: 24,
      },
      {
        id: 2,
        user: "Ananya P.",
        avatar: "/placeholder.svg?height=40&width=40",
        image: "/placeholder.svg?height=200&width=300",
        votes: 18,
      },
      {
        id: 3,
        user: "Vikram S.",
        avatar: "/placeholder.svg?height=40&width=40",
        image: "/placeholder.svg?height=200&width=300",
        votes: 32,
      },
    ],
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-8">
        {/* Challenge Header */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <Link href="/challenges">
              <Button variant="ghost" size="sm">
                ← Back to Challenges
              </Button>
            </Link>
            <Badge className="bg-orange-100 text-orange-800">{challenge.category}</Badge>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{challenge.title}</h1>
              <p className="text-gray-500 mt-2">{challenge.description}</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" /> Share
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700">Participate</Button>
            </div>
          </div>
        </div>

        {/* Challenge Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={challenge.image || "/placeholder.svg"}
            alt={challenge.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Challenge Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="rules">Rules</TabsTrigger>
                <TabsTrigger value="submissions">Submissions</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">About this Challenge</h3>
                  <p>{challenge.longDescription}</p>
                  <div className="flex items-center space-x-4 pt-4">
                    <Avatar>
                      <AvatarImage src={challenge.creator.avatar || "/placeholder.svg"} alt={challenge.creator.name} />
                      <AvatarFallback>{challenge.creator.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{challenge.creator.name}</p>
                      <p className="text-sm text-gray-500">{challenge.creator.title}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="rules" className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Challenge Rules</h3>
                  <ul className="space-y-2">
                    {challenge.rules.map((rule, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="submissions" className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Top Submissions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {challenge.submissions.map((submission) => (
                      <div key={submission.id} className="border rounded-lg overflow-hidden">
                        <img
                          src={submission.image || "/placeholder.svg"}
                          alt={`Submission by ${submission.user}`}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={submission.avatar || "/placeholder.svg"} alt={submission.user} />
                                <AvatarFallback>{submission.user.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium">{submission.user}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              <span>{submission.votes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Submissions
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Challenge Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-orange-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Reward</p>
                      <p className="font-medium">{challenge.reward}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-orange-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Deadline</p>
                      <p className="font-medium">{challenge.deadline}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-orange-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Time Left</p>
                      <p className="font-medium">{challenge.timeLeft}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-orange-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Participants</p>
                      <p className="font-medium">{challenge.participants} people</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">Participate Now</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">How It Works</h3>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      1
                    </span>
                    <span className="text-sm">Join the challenge by clicking "Participate"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      2
                    </span>
                    <span className="text-sm">Submit your entry before the deadline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      3
                    </span>
                    <span className="text-sm">Community votes on submissions for 48 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      4
                    </span>
                    <span className="text-sm">Winners are announced and rewards distributed</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
