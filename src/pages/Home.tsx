import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

function Home() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // .reveal クラスの要素を順番にフェードイン
      gsap.from('.reveal', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    },
    { scope: container }
  )

  return (
    <div ref={container} className="text-center">
      <h1 className="reveal text-5xl font-bold tracking-tight">
        Welcome 👋
      </h1>
      <p className="reveal mt-4 text-lg text-slate-400">
        GSAP の useGSAP フックでマウント時にアニメーションしています。
      </p>
      <div className="reveal mt-10 grid gap-4 sm:grid-cols-3">
        {['React Router', 'GSAP', 'Fancybox'].map((name) => (
          <div
            key={name}
            className="rounded-xl border border-slate-800 bg-slate-800/50 p-6 font-medium"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
