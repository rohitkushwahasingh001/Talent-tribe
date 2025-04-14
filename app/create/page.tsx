"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Upload } from "lucide-react"

export default function CreateChallengePage() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Create a Challenge</h1>
          <p className="text-gray-500">
            Set up a new skill challenge and invite participants to showcase their talents.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Challenge Details</CardTitle>
            <CardDescription>Fill in the information about your challenge.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="rules">Rules & Criteria</TabsTrigger>
                <TabsTrigger value="rewards">Rewards</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4 pt-4">
                <div className="grid w-full gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Challenge Title</Label>
                    <Input id="title" placeholder="Enter a catchy title for your challenge" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="photography">Photography</SelectItem>
                          <SelectItem value="writing">Writing</SelectItem>
                          <SelectItem value="programming">Programming</SelectItem>
                          <SelectItem value="video">Video</SelectItem>
                          <SelectItem value="music">Music</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deadline">Deadline</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Short Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Briefly describe your challenge (max 150 characters)"
                      className="resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="long-description">Detailed Description</Label>
                    <Textarea
                      id="long-description"
                      placeholder="Provide detailed information about your challenge"
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cover-image">Cover Image</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500 mb-1">Drag and drop an image here or click to browse</p>
                      <p className="text-xs text-gray-400">Recommended size: 1200 x 600px. Max size: 5MB</p>
                      <Input id="cover-image" type="file" className="hidden" />
                      <Button variant="outline" size="sm" className="mt-4">
                        Upload Image
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="rules" className="space-y-4 pt-4">
                <div className="grid w-full gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rules">Challenge Rules</Label>
                    <Textarea
                      id="rules"
                      placeholder="List the rules for your challenge (one per line)"
                      className="min-h-[150px]"
                    />
                    <p className="text-xs text-gray-500">Enter each rule on a new line. Be clear and specific.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="submission-format">Submission Format</Label>
                    <Select>
                      <SelectTrigger id="submission-format">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="image">Image</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="text">Text</SelectItem>
                        <SelectItem value="file">File Upload</SelectItem>
                        <SelectItem value="link">Link</SelectItem>
                        <SelectItem value="mixed">Mixed Media</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="judging-criteria">Judging Criteria</Label>
                    <Textarea
                      id="judging-criteria"
                      placeholder="Explain how submissions will be judged"
                      className="min-h-[120px]"
                    />
                    <p className="text-xs text-gray-500">
                      Describe what voters should look for when evaluating submissions.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="voting-duration">Voting Duration</Label>
                      <Select>
                        <SelectTrigger id="voting-duration">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="24h">24 Hours</SelectItem>
                          <SelectItem value="48h">48 Hours</SelectItem>
                          <SelectItem value="72h">72 Hours</SelectItem>
                          <SelectItem value="1w">1 Week</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="max-submissions">Max Submissions Per User</Label>
                      <Select>
                        <SelectTrigger id="max-submissions">
                          <SelectValue placeholder="Select limit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Submission</SelectItem>
                          <SelectItem value="3">3 Submissions</SelectItem>
                          <SelectItem value="5">5 Submissions</SelectItem>
                          <SelectItem value="unlimited">Unlimited</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="rewards" className="space-y-4 pt-4">
                <div className="grid w-full gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reward-type">Reward Type</Label>
                    <Select>
                      <SelectTrigger id="reward-type">
                        <SelectValue placeholder="Select reward type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cash">Cash Prize</SelectItem>
                        <SelectItem value="voucher">Vouchers/Coupons</SelectItem>
                        <SelectItem value="mixed">Mixed Rewards</SelectItem>
                        <SelectItem value="recognition">Recognition Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="reward-amount">Reward Amount (₹)</Label>
                      <Input id="reward-amount" type="number" placeholder="e.g., 500" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="winners-count">Number of Winners</Label>
                      <Select>
                        <SelectTrigger id="winners-count">
                          <SelectValue placeholder="Select count" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Winner</SelectItem>
                          <SelectItem value="3">Top 3</SelectItem>
                          <SelectItem value="5">Top 5</SelectItem>
                          <SelectItem value="10">Top 10</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reward-description">Reward Description</Label>
                    <Textarea
                      id="reward-description"
                      placeholder="Describe the rewards in detail"
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-gray-500">
                      Explain how rewards will be distributed and any conditions that apply.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="entry-fee">Entry Fee (₹)</Label>
                    <Input id="entry-fee" type="number" placeholder="e.g., 10 (leave empty for free entry)" />
                    <p className="text-xs text-gray-500">
                      Set a small entry fee or leave empty for free participation.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Save as Draft</Button>
            <Button className="bg-orange-600 hover:bg-orange-700">Create Challenge</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
