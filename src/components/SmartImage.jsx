import { useState } from 'react'

// Imagem com fallback elegante na marca.
// Tenta carregar a foto de banco (Unsplash). Se falhar (offline, link removido),
// mostra um placeholder em SVG com as cores da XelbMinds — o site nunca fica
// com imagens partidas. Substituir pelas fotografias reais da marca (ver IMAGENS.md).

function placeholder(label) {
  const text = (label || 'XelbMinds').slice(0, 42)
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stop-color='#e7eed8'/>
          <stop offset='1' stop-color='#d6e6ee'/>
        </linearGradient>
      </defs>
      <rect width='1200' height='800' fill='url(#g)'/>
      <circle cx='250' cy='200' r='130' fill='#b5c97a' opacity='0.55'/>
      <circle cx='950' cy='560' r='170' fill='#5b8fa8' opacity='0.45'/>
      <circle cx='620' cy='330' r='70' fill='#5b8fa8' opacity='0.35'/>
      <text x='50%' y='50%' text-anchor='middle' dominant-baseline='middle'
            font-family='Georgia, serif' font-size='40' fill='#3d6678'>${text}</text>
    </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export default function SmartImage({ src, alt = '', label, className = '', loading = 'lazy', ...rest }) {
  const [failed, setFailed] = useState(false)
  const finalSrc = !src || failed ? placeholder(label || alt) : src

  return (
    <img
      src={finalSrc}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  )
}
