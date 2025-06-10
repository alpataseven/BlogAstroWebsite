// src/components/BlogCard.jsx
export default function BlogCard({ post }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tags.map((tag, idx) => (
            <div key={idx} className="badge badge-outline">{tag}</div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-primary">Detay</button>
        </div>
      </div>
    </div>
  )
}
