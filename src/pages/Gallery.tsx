import useFancybox from '../hooks/useFancybox'

const images = [60, 61, 62, 63, 64, 65]

function Gallery() {
  const [fancyboxRef] = useFancybox({
    // 必要に応じてオプションを追加
    Carousel: { infinite: false },
  })

  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight">Gallery</h1>
      <p className="mt-4 text-slate-400">
        サムネイルをクリックすると Fancybox のライトボックスが開きます。
      </p>

      <div
        ref={fancyboxRef}
        className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3"
      >
        {images.map((id) => (
          <a
            key={id}
            data-fancybox="gallery"
            href={`https://lipsum.app/id/${id}/1600x1200`}
            data-caption={`Sample image #${id}`}
            className="group overflow-hidden rounded-xl border border-slate-800"
          >
            <img
              src={`https://lipsum.app/id/${id}/400x300`}
              alt={`Sample ${id}`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Gallery
