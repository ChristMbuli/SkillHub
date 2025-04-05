import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Phone, Globe, Calendar } from "lucide-react"
import { profilesDetails } from "@/src/lib/data"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Separator } from "@/src/components/ui/separator"
import { Badge } from "@/src/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"

export default function ProfilePage({ params }: { params: { id: string } }) {
  const profile = profilesDetails.find((p) => p.id === Number.parseInt(params.id)) || profilesDetails[0]

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Profile Details</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center mb-6">
              <Avatar className="h-32 w-32 mb-4">
                <AvatarImage src={profile.image} alt={profile.name} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="text-muted-foreground">{profile.title}</p>
              <div className="flex items-center justify-center text-sm text-muted-foreground mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                {profile.location}
              </div>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Contact Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                    <a href={profile.website} className="text-primary hover:underline">
                      {profile.website}
                    </a>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Availability</h3>
                <Badge variant={profile.available ? "success" : "secondary"} className="w-full justify-center py-1.5">
                  {profile.available ? "Available" : "Not Available"}
                </Badge>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Member Since</h3>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{profile.memberSince}</span>
                </div>
              </div>

              <Button className="w-full">Contact</Button>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">About Me</h3>
                  <div className="space-y-4">
                    <p>{profile.description}</p>
                    <p>{profile.longDescription}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="skills" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Skills</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {profile.skillsDetails.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${skill.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Professional Experience</h3>
                  <div className="space-y-6">
                    {profile.experience.map((exp, index) => (
                      <div key={index} className="relative pl-6 pb-6 border-l border-muted last:pb-0">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary" />
                        <h4 className="font-medium">{exp.position}</h4>
                        <p className="text-muted-foreground text-sm">
                          {exp.company} • {exp.period}
                        </p>
                        <p className="mt-2 text-sm">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}




