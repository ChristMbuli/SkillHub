import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">SkillHub</h1>
        <p className="text-muted-foreground mt-1">Find the best professionals for your projects</p>
      </div>
     <div className="flex items-center gap-2">
     <Button asChild>
        <Link href="/new-profil">Add My Profile</Link>
      </Button>
      <ModeToggle />
     </div>
    </header>
  );
}