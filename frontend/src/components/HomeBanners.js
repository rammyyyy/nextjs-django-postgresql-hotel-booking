'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function HomeBanners() {
	return (
		<Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}>
			<div>
				<img src="banners/1.png" />
			</div>
			<div>
				<img src="banners/2.png" />
			</div>
			<div>
				<img src="banners/3.png" />
			</div>
			<div>
				<img src="banners/4.png" />
			</div>
		</Carousel>
	)
}
