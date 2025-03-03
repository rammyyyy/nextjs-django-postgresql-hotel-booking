import Link from "next/link"

export default function HomeServices() {
	return (
		<section className="container my-5">
			<h3 className="my-3 text-center">SERVICES</h3>
			<div className="row text-center">
				<div className="col-4">
					<div className="card">
						<img src="thumbs/rooms.png" className="class-img-top" alt="OUR ROOMS" />
						<div className="card-body bg-gray text-white">
							<h4 className="mt-1"><Link href='/rooms' className="text-white text-decoration-none">OUR ROOMS</Link></h4>
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="card">
						<img src="thumbs/events.png" className="class-img-top" alt="EVENTS" />
						<div className="card-body bg-gray text-white">
							<h4 className="mt-1"><Link href='/rooms' className="text-white text-decoration-none">EVENTS</Link></h4>
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="card">
						<img src="thumbs/booking.png" className="class-img-top" alt="ONLINE BOOKING" />
						<div className="card-body bg-gray text-white">
							<h4 className="mt-1"><Link href='/user/signin' className="text-white text-decoration-none">ONLINE BOOKING</Link></h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
