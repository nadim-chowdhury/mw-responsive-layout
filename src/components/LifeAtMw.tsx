import LifeAtMwImage from "./LifeAtMwImage";

export default function LifeAtMw() {
  return (
    <section className="px-4 bg-white py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="text-3xl font-bold">
            Life At <span className="text-teal-600">Mediusware</span>
          </h3>
          <p>
            Our employees thrives on solving complex challenges, embracing new
            technologies, and pushing the boundaries of what&apos;s possible in
            the software world.
          </p>
        </div>

        <div className="flex mt-10">
          <div className="flex flex-col gap-8">
            <LifeAtMwImage imgSrc="/lifeat1.jpg" width={410} />
            <LifeAtMwImage imgSrc="/lifeat4.jpg" width={410} />
          </div>

          <div className="flex flex-col justify-between">
            <LifeAtMwImage imgSrc="/lifeat2.jpg" width={502} />
            <LifeAtMwImage imgSrc="/lifeat5.jpg" width={502} />
          </div>

          <div className="flex flex-col gap-8">
            <LifeAtMwImage imgSrc="/lifeat3.jpg" width={410} />
            <LifeAtMwImage imgSrc="/lifeat6.jpg" width={410} />
          </div>
        </div>
      </div>
    </section>
  );
}
