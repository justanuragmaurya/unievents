"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import EventRegistration from "@/types/interface"
import React, { use, useState } from "react"

export default function Component() {
  const[ data, setData ] = useState<EventRegistration | null>({
    "name": "",
    "type": "",
    "description": "",
    "category": "",
    "tags": [],
    "startDate": "",
    "startTime": "",
    "endDate": "",
    "endTime": "",
    "registrationDeadline": "",
    "venue": "",
    "virtualLink": "",
    "maxAttendees": 0,
    "organizerName": "",
    "organizerContact": "",
    "organizerDepartment": ""
  });

  console.log(data)

  return (
    <div className="flex items-center justify-center mt-10">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Event Registration</CardTitle>
          <CardDescription>Fill out the form to register your event.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Event Name</Label>
                <Input id="name" placeholder="Enter event name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Event Type</Label>
                <Select >
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-person">In-Person</SelectItem>
                    <SelectItem value="virtual">Virtual</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Event Description</Label>
              <Textarea id="description" placeholder="Describe your event" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category">Event Category</Label>
                <Select >
                  <SelectTrigger>
                    <SelectValue placeholder="Select event category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conference">Conference</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="meetup">Meetup</SelectItem>
                    <SelectItem value="webinar">Webinar</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Event Tags</Label>
                <Input id="tags" placeholder="Enter event tags (separated by commas)" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Event <b>Start</b> Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start font-normal">
                      <div className="mr-2 h-4 w-4 opacity-50" />
                      <span>Select date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-6">
                <div className="space-y-2">
                  <Label htmlFor="start-time"> Time</Label>
                  <Input id="start-time" type="time" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Event <b>End</b> Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start font-normal">
                      <div className="mr-2 h-4 w-4 opacity-50" />
                      <span>Select date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-6">
                <div className="space-y-2">
                  <Label htmlFor="start-time">Time</Label>
                  <Input id="start-time" type="time" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="deadline">Registration Deadline</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start font-normal">
                      <div className="mr-2 h-4 w-4 opacity-50" />
                      <span>Select deadline</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="venue">Event Venue</Label>
                <Input id="venue" placeholder="Enter event venue" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="virtual-link">Virtual Event Link</Label>
                <Input id="virtual-link" placeholder="Enter virtual event link" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-attendees">Maximum Attendees</Label>
                <Input id="max-attendees" type="number" placeholder="Enter max attendees" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="organizer-name">Organizer Name</Label>
                <Input id="organizer-name" placeholder="Enter organizer name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organizer-contact">Contact Information</Label>
                <Input id="organizer-contact" placeholder="Enter contact information" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="organizer-department">Organizer Department</Label>
              <Input id="organizer-department" placeholder="Enter organizer department" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="flex justify-end">
            <Button>Register Event</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}