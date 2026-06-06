import { Link } from 'react-router-dom'
import SmartImage from './SmartImage'
import Reveal from './Reveal'

export function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('pt-PT', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

export default function BlogCard({ post, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to={`/blog/${post.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-soft cursor-pointer"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <SmartImage
            src={post.cover}
            alt={post.coverAlt || post.title}
            label={post.category}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-xs font-semibold">
            <span className="rounded-full bg-green-50 px-3 py-1 font-heading text-blue-700">
              {post.category}
            </span>
            <time className="text-muted" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>
          <h3 className="mt-3 text-lg font-semibold leading-snug transition-colors group-hover:text-blue">
            {post.title}
          </h3>
          <p className="mt-2 flex-1 text-[15px] text-body line-clamp-3">{post.excerpt}</p>
          <span className="mt-4 font-heading text-sm font-bold text-blue">Ler artigo →</span>
        </div>
      </Link>
    </Reveal>
  )
}
