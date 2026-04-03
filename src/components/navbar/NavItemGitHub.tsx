import { SOURCE_CODE_GITHUB_REPO } from "@/config/site"

import { GitHubStars } from "./GitHubStars"

async function getStargazerCount() {
  try {
    const token = process.env.STAR_GITHUB_API_TOKEN
    const response = await fetch(
      `https://api.github.com/repos/${SOURCE_CODE_GITHUB_REPO}`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      }
    )

    if (!response.ok) {
      return null
    }

    const payload = (await response.json()) as { stargazers_count?: number }
    const stargazersCount = Number(payload.stargazers_count)

    return Number.isFinite(stargazersCount) ? stargazersCount : null
  } catch {
    return null
  }
}

export async function NavItemGitHub() {
  const stargazersCount = await getStargazerCount()

  return (
    <GitHubStars
      repo={SOURCE_CODE_GITHUB_REPO}
      stargazersCount={stargazersCount}
    />
  )
}
