import { BlogCard } from "@/components/ui/BlogCard"
import type { BlogPostSummary } from "@/types"

export function LatestPosts({ posts }: { posts: BlogPostSummary[] }) {
  return (
    <section>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted">No posts yet.</p>
      )}
    </section>
  )
}
