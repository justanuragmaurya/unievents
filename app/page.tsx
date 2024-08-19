import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div>
        <BlurFade delay={0.25} inView>
          <div className="flex flex-col justify-center text-center items-center my-12 md:my-24 lg:my-48 w-full text-[#fafafa] px-4 md:px-8">
            <div>
              <h2 className="bg-[#1a1a1a] px-5 py-1 my-2 rounded-full border-[0.5px] border-[#3a3a3a] shadow-md">
                ✨ All events a click away
              </h2>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold">
              Discover Campus Life <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
                All University Events
              </span>
              ,<br /> One Click Away
            </h2>
            <h2 className="w-full md:w-2/3 lg:w-1/3 text-[#a1a1a1] mt-5 opacity-60">
              Your gateway to every party, hackathon, and workshop on campus.
              Never miss a beat – find, track, and attend events that shape your
              college experience.
            </h2>
            <Button className="bg-red-500 hover:bg-red-600 rounded-full px-10 mt-5 border-[0.5px] border-[#3a3a3a]">
              View Events
            </Button>
          </div>
        </BlurFade>
      </div>
    </>
  );
}
