interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  url: string;
  tags: string[];
}

export default function ProductCard({
  id,
  image,
  title,
  url,
  tags,
}: ProductCardProps) {
  return (
    <div
      id={id}
      className="bg-white shadow-sm rounded-sm p-6 border border-light"
    >
      <img src={image} alt={title} className="w-full h-auto mb-4" />
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-primary hover:underline mb-4 block"
      >
        {url}
      </a>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-light text-black text-sm rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-primary text-white rounded-sm hover:bg-primary-light transition-colors">
          DESKTOP
        </button>
        <button className="px-4 py-2 bg-black text-white rounded-sm hover:bg-gray-800 transition-colors">
          MOBILE
        </button>
      </div>
    </div>
  );
}
