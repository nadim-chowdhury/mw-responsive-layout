import ApplicationProcessCard from "./ApplicationProcessCard";

export default function ApplicationProcess() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:max-w-6xl lg:mx-auto my-10 mx-4">
      <div>
        <h4 className="application__process from-indigo-600 to-indigo-400">
          1
        </h4>
        <ApplicationProcessCard />
      </div>

      <div>
        <h4 className="application__process from-green-600 to-green-400">2</h4>
        <ApplicationProcessCard />
      </div>

      <div>
        <h4 className="application__process from-red-600 to-red-400">3</h4>
        <ApplicationProcessCard />
      </div>

      <div>
        <h4 className="application__process from-yellow-600 to-yellow-400">
          4
        </h4>
        <ApplicationProcessCard />
      </div>

      <div>
        <h4 className="application__process from-blue-600 to-blue-400">5</h4>
        <ApplicationProcessCard />
      </div>
    </section>
  );
}
