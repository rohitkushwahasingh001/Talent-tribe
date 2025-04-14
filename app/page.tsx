import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Skill Challenge Platform
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Connect, compete, and earn rewards through interactive skill challenges
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/challenges">
                <Button className="bg-orange-600 hover:bg-orange-700">Explore Challenges</Button>
              </Link>
              <Link href="/create">
                <Button variant="outline">Create Challenge</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Real-Time Rewards</h3>
                <p className="text-gray-500">
                  Win instant micro-rewards (₹50-200) via UPI or discount coupons from partner brands
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Community Voting</h3>
                <p className="text-gray-500">Democratic voting process within 24-48 hours to determine winners</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Low Entry Barrier</h3>
                <p className="text-gray-500">
                  Affordable participation fees (₹10-20) or free entry for all skill levels
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to showcase your skills?</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                Join our platform today and start participating in challenges or create your own.
              </p>
            </div>
            <Link href="/register">
              <Button className="bg-orange-600 hover:bg-orange-700">
                Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
