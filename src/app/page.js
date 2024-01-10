import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Slider></Slider>
      <Featured></Featured>
      <Offer />
    </main>
  )
}
