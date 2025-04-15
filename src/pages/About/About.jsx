import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm A Ayush Menon, a full-stack developer specializing in MERN stack applications
                with expertise in cloud platforms (AWS) and databases (MongoDB, PostgreSQL).
                As a hard-working developer, I combine relentless work ethic with spiritual mindfulness to deliver effective solutions through passionate coding and technical excellence.
                bringing focused energy and creative problem-solving to every project.{" "}
              </p>
              <p className="text-white">
                I excel in problem-solving and cross-functional collaboration, delivering scalable
                applications through clean code and RESTful APIs. My development approach emphasizes
                user-focused solutions, system optimization, and maintainable architecture patterns. My passion for coding drives continuous innovation, with spiritual practices enhancing my collaborative problem-solving and system design effectiveness.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I champion developer productivity through clean code practices and system design,
                    focusing on performance, security, and seamless user experiences. My spiritual practice fuels both personal growth and community-focused development philosophy,
                    My work is driven by continuous learning and mindfulness in development.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      A Ayush Menon
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
