import HomeBanners from "@/components/HomeBanners"
import HomeGallery from "@/components/HomeGallery"
import HomeServices from "@/components/HomeServices"

export default function Home() {
  return (
    <main>
      <HomeBanners />
      <div className="text-center text-indent-8 pt-5">
        <h1>WHERE COMFORT MEETS LUXURY</h1>
        <p className="text-gray text-sm pt-3 pb-3">Experience a harmonious blend of comfort and luxury in every corner of our hotel.<br />From the moment you step through our doors, enjoy world-class amenities, impeccable service,<br />and an ambiance designed for ultimate relaxation. Whether you're here for business or leisure,<br />we ensure your stay exceeds expectations, leaving you refreshed and rejuvenated.</p>
      </div>
      <HomeServices />
      <HomeGallery />
    </main>
  )
}
