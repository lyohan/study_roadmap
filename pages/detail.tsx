import type { NextPage } from 'next'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { useRef, useEffect, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import _ from 'lodash'

const Detail: NextPage = () => {
  const settings: Settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '16px',
    className: 'py-4 bg-yellow-400',
    adaptiveHeight: true,
  }

  const [activeRoadMap, setActiveLoadMap] = useState(0)
	const sliderBox = useRef<any>(null)
  useEffect(() => {
    if (sliderBox?.current) {
      
      sliderBox.current.addEventListener('scroll', _.throttle((e) => {
        const clientWidth = sliderBox?.current?.clientWidth
        console.log('sadfasfd', sliderBox.current.scrollLeft , sliderBox.current.scrollWidth)
        // let index = Math.round((sliderBox.current.scrollLeft / sliderBox.current.scrollWidth)) * 3
        let index = sliderBox.current.scrollLeft / (332 - ((clientWidth - 300) / 2))
        setActiveLoadMap(index)
        // if (sliderBox.current.scrollLeft < 300) {
        //   setActiveLoadMap(0)
        // }

        // if (sliderBox.current.scrollLeft >= 300 && sliderBox.current.scrollLeft < 600) {
        //   setActiveLoadMap(1)
        // }

        // if (sliderBox.current.scrollLeft > 600) {
        //   setActiveLoadMap(2)
        // }
      }, 500))
    }
    // console.log('asdf111f', sliderBox?.current?.scrollLeft)
  }, [])
  return (
    <div style={{ maxWidth: '100%' }}>
      <div>
        <h3>웹 프론트엔드 경로를 안내합니다.</h3>
        <h1>기초 학습</h1>
      </div>
      <div>
        <h1>{activeRoadMap}</h1>
      </div>
      <div className="space-x-3">
        <button onClick={() => {
						sliderBox.current.scrollLeft = 0
						// sliderBox?.current?.scrollLeft = Math.floor(sliderBox?.current?.scrollWidth * (1 / 3))
					}}
          className={activeRoadMap === 0 ? 'bg-yellow-400' : ''}
        >one</button>
        <button onClick={() => {
          // const scrollLeft = Math.floor(scroller.scrollWidth * (i / 4))
						const clientWidth = sliderBox?.current?.clientWidth
						// console.log('asdf', clientWidth - 32 - ((clientWidth - 300) / 2))
            console.log('button one', 332 - ((clientWidth - 300) / 2))
						sliderBox.current.scrollLeft = 332 - ((clientWidth - 300) / 2)
            // sliderBox?.current?.scrollLeft = 300
            // sliderBox?.current?.scrollLeft = Math.floor(sliderBox?.current?.scrollWidth * (2 / 3))
					}}
          className={activeRoadMap === 1 ? 'bg-yellow-400' : ''}
          >two</button>
        <button onClick={() => {
						const clientWidth = sliderBox?.current?.clientWidth
						sliderBox.current.scrollLeft = (332 - ((clientWidth - 300) / 2)) * 2
            // sliderBox?.current?.scrollLeft = 600
            // sliderBox?.current?.scrollLeft = Math.floor(sliderBox?.current?.scrollWidth * (3 / 3))
					}}
          className={activeRoadMap === 2 ? 'bg-yellow-400' : ''}
        >three</button>
      </div>
      <div className="flex space-x-4 snap-mandatory snap-x overflow-x-scroll p-4"
				ref={sliderBox}
				style={{ scrollBehavior: 'smooth' }}
			>
        <div className="snap-center" style={{ width: 300 }}>
          <div
            className="bg-gray-200"
            style={{ width: 300, height: 275 }}
          ></div>
          <div
            className="mt-4 bg-gray-200"
            style={{ width: 300, height: 275 }}
          ></div>
          <div
            className="mt-4 bg-gray-200"
            style={{ width: 300, height: 275 }}
          ></div>
          <div
            className="mt-4 bg-gray-200"
            style={{ width: 300, height: 275 }}
          ></div>
        </div>
        <div className="snap-center" style={{ width: 300 }}>
          <div
            className="bg-gray-200"
            style={{ width: 300, height: 275 }}
          ></div>
          <div
            className="mt-4 bg-gray-200"
            style={{ width: 300, height: 275 }}
          ></div>
          <div
            className="mt-4 bg-gray-200"
            style={{ width: 300, height: 275 }}
          ></div>
          <div
            className="mt-4 bg-gray-200"
            style={{ width: 300, height: 275 }}
          ></div>
        </div>
        <div className="snap-center" style={{ width: 300 }}>
          <div
            className="bg-gray-200"
            style={{ width: 300, height: 275 }}
          ></div>
          <div
            className="mt-4 bg-gray-200"
            style={{ width: 300, height: 275 }}
          ></div>
          <div
            className="mt-4 bg-gray-200"
            style={{ width: 300, height: 275 }}
          ></div>
          <div
            className="mt-4 bg-gray-200"
            style={{ width: 300, height: 275 }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Detail
