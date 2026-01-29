import type { CouraselComponent } from '@/types/data-types'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'

interface Props {
  listContent: CouraselComponent[]
}

export default function EmblaLoopCarousel({ listContent }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
  })

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedSnap())
    }

    onSelect()
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {listContent.map((item, index) => (
            <div
              key={item.id}
              className={`embla__slide ${
                index === selectedIndex ? 'is-active' : ''
              }`}
            >
              {item.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
