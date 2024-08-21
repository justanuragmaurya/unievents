import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

export default function Home() {
  return (
    <>
      <div>
        <BlurFade delay={0.25} inView>
          <div className="flex flex-col justify-center text-center items-center my-12 md:my-24 lg:my-48 w-full text-[#fafafa] px-4 md:px-8">
            <div className="bg-gradient-to-br from-[#fafafa] to-[#cfcfcf] rounded-full m-2">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing UniEvents</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>  
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
