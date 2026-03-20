import { BackLink } from "@/components/ui/BackLink"

export default function Resume() {
  return (
    <div className="space-y-4 p-4">
      <BackLink href="/">Back home</BackLink>
      <h1 className="text-2xl font-bold">Resume</h1>
      <p className="mt-4">This is where my resume will go. Stay tuned!</p>
    </div>
  )
}
