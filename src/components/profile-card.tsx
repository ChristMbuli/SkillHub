import Link from "next/link"
import { MapPin } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

interface Profile {
  id: number
  name: string
  title: string
  image: string
  skills: string[]
  description: string
  location: string
}

interface ProfileCardProps {
  profile: Profile
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/10" />
      </CardHeader>
      <CardContent className="p-6 pt-0 -mt-12">
        <div className="flex flex-col items-center mb-4">
          <Avatar className="h-24 w-24 border-4 border-background">
            <AvatarImage src={profile.image} alt={profile.name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-xl mt-2">{profile.name}</h3>
          <p className="text-muted-foreground">{profile.title}</p>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <MapPin className="h-3 w-3 mr-1" />
            {profile.location}
          </div>
        </div>
        <p className="text-sm line-clamp-2 mb-4">{profile.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {profile.skills.slice(0, 4).map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
          {profile.skills.length > 4 && <Badge variant="outline">+{profile.skills.length - 4}</Badge>}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 p-6 pt-0">
        <Button asChild className="flex-1">
          <Link href={`/profil/${profile.id}`}>View Profil</Link>
        </Button>
        <Button variant="outline" className="flex-1">
          Contact
        </Button>
      </CardFooter>
    </Card> 
  )
}

