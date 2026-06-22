import useFancybox from '../hooks/useFancybox'

function Gallery() {
  const [fancyboxRef] = useFancybox()

  return (
    <div ref={fancyboxRef}></div>
  )
}

export default Gallery
