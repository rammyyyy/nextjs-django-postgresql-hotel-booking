import Link from "next/link"

export default function Services() {
  return (
    <section className="container my-5">
      <h1 className="my-3 text-center">SERVICES</h1>
      <div className="row text-center mt-5">
        <div className="col-4">
          <div className="card">
            <img src="thumbs/rooms.png" className="class-img-top" alt="EVENTS" />
            <div className="card-body bg-gray text-white">
              <h4 className="mt-1"><Link href='#' className="text-white text-decoration-none">EVENTS</Link></h4>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img src="thumbs/events.png" className="class-img-top" alt="WEDDING" />
            <div className="card-body bg-gray text-white">
              <h4 className="mt-1"><Link href='#' className="text-white text-decoration-none">WEDDING</Link></h4>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img src="thumbs/booking.png" className="class-img-top" alt="DINING" />
            <div className="card-body bg-gray text-white">
              <h4 className="mt-1"><Link href='#' className="text-white text-decoration-none">DINING</Link></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
