import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Award, Edit, Settings, Star, Trophy } from "lucide-react"

export default function ProfilePage() {
  // This would be fetched from an API in a real application
  const user = {
    name: "Rahul Kumar",
    username: "@rahulk",
    bio: "Digital creator and photography enthusiast. Love participating in creative challenges.",
    avatar: "/placeholder.svg?height=100&width=100",
    location: "Mumbai, India",
    joined: "March 2023",
    stats: {
      challenges: 24,
      wins: 5,
      earnings: "₹4,500",
    },
    skills: ["Photography", "Graphic Design", "Content Writing", "Video Editing"],
    badges: [
      { name: "Early Adopter", icon: "🚀" },
      { name: "Challenge Creator", icon: "🏆" },
      { name: "5x Winner", icon: "🥇" },
    ],
    createdChallenges: [
      {
        id: 1,
        title: "Street Photography Contest",
        participants: 78,
        status: "Active",
        image: "/placeholder.svg?height=100&width=200",
      },
      {
        id: 2,
        title: "Logo Design Challenge",
        participants: 45,
        status: "Completed",
        image: "/placeholder.svg?height=100&width=200",
      },
    ],
    participatedChallenges: [
      {
        id: 1,
        title: "Mobile Photography Masterclass",
        result: "Winner",
        reward: "₹500",
        image: "/placeholder.svg?height=100&width=200",
      },
      {
        id: 2,
        title: "Content Writing Sprint",
        result: "Top 5",
        reward: "₹200",
        image: "/placeholder.svg?height=100&width=200",
      },
      {
        id: 3,
        title: "Video Editing Challenge",
        result: "Participated",
        reward: "-",
        image: "/placeholder.svg?height=100&width=200",
      },
    ],
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-8">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center md:items-start gap-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center md:items-start">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <p className="text-gray-500">{user.username}</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <p className="text-gray-700">{user.bio}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" /> Edit Profile
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Challenges</p>
                    <p className="font-bold text-lg">{user.stats.challenges}</p>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Wins</p>
                    <p className="font-bold text-lg">{user.stats.wins}</p>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Earnings</p>
                    <p className="font-bold text-lg">{user.stats.earnings}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges Section */}
        <div className="flex flex-wrap gap-4">
          {user.badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 bg-orange-50 text-orange-800 px-4 py-2 rounded-full">
              <span className="text-xl">{badge.icon}</span>
              <span className="font-medium">{badge.name}</span>
            </div>
          ))}
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="participated" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="participated">Participated Challenges</TabsTrigger>
            <TabsTrigger value="created">Created Challenges</TabsTrigger>
          </TabsList>

          <TabsContent value="participated" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.participatedChallenges.map((challenge) => (
                <Card key={challenge.id} className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={challenge.image || "/placeholder.svg"}
                      alt={challenge.title}
                      className="w-full h-40 object-cover"
                    />
                    {challenge.result === "Winner" && (
                      <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded-md flex items-center">
                        <Trophy className="h-3 w-3 mr-1" /> Winner
                      </div>
                    )}
                    {challenge.result === "Top 5" && (
                      <div className="absolute top-2 right-2 bg-orange-400 text-white px-2 py-1 rounded-md flex items-center">
                        <Star className="h-3 w-3 mr-1" /> Top 5
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{challenge.title}</h3>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">Result: {challenge.result}</div>
                      <div className="text-sm font-medium">
                        {challenge.reward !== "-" && (
                          <div className="flex items-center">
                            <Award className="h-3 w-3 mr-1 text-orange-600" />
                            {challenge.reward}
                          </div>
                        )}
                      </div>
                    </div>
                    <Link href={`/challenges/${challenge.id}`}>
                      <Button variant="ghost" className="w-full mt-2 text-sm h-8">
                        View Challenge
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="created" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.createdChallenges.map((challenge) => (
                <Card key={challenge.id} className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={challenge.image || "/placeholder.svg"}
                      alt={challenge.title}
                      className="w-full h-40 object-cover"
                    />
                    <div
                      className={`absolute top-2 right-2 ${
                        challenge.status === "Active" ? "bg-green-600" : "bg-gray-600"
                      } text-white px-2 py-1 rounded-md text-xs`}
                    >
                      {challenge.status}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{challenge.title}</h3>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">{challenge.participants} participants</div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <Link href={`/challenges/${challenge.id}`} className="flex-1">
                        <Button variant="outline" className="w-full text-sm h-8">
                          View
                        </Button>
                      </Link>
                      <Link href={`/challenges/${challenge.id}/edit`} className="flex-1">
                        <Button variant="outline" className="w-full text-sm h-8">
                          Edit
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="flex flex-col items-center justify-center p-6 h-full border-dashed">
                <div className="rounded-full bg-orange-100 p-3 mb-4">
                  <Trophy className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Create a New Challenge</h3>
                <p className="text-sm text-gray-500 text-center mb-4">
                  Share your expertise and create a new skill challenge
                </p>
                <Link href="/create">
                  <Button className="bg-orange-600 hover:bg-orange-700">Create Challenge</Button>
                </Link>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
