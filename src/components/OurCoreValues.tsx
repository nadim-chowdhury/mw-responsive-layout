import OurCoreValuesCard from "./OurCoreValuesCard";

export default function OurCoreValues() {
  return (
    <section className="py-10 max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Our Core <span className="text-teal-600">Values</span>
        </h2>
        <p className="mx-4">
          Our core values are the guiding principles that underpin our work and
          define our culture. Integrity is at the heart of everything we do; we
          believe in honesty, transparency, and ethical behavior.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start mt-10 sm:mx-4 lg:mx-0">
        <OurCoreValuesCard
          title="Team work"
          desc="Our team works together to achieve common goals and supports each other to ensure the success of our projects."
          borderColor="border-indigo-600"
        />
        <OurCoreValuesCard
          title="Secured Future"
          desc="We recognize the significance of a stable future, and our commitment lies in furnishing our staff with a secure and nurturing workplace."
          borderColor="border-green-600"
          mt="lg:mt-4"
        />
        <OurCoreValuesCard
          title="Upgrade Skills"
          desc="At our company, we believe in staying ahead of the curve and embracing new technologies and techniques."
          borderColor="border-red-600"
        />
        <OurCoreValuesCard
          title="Delicious Foods"
          desc="We are providing unlimited coffee, free lunch, Snacks so that you can enjoy it with everyone."
          borderColor="border-yellow-600"
          mt="lg:mt-4"
        />
        <OurCoreValuesCard
          title="Annual Retreat"
          desc="Our annual retreats offer a mix of workshops, outdoor activities, and social events in a scenic setting that fosters creativity and camaraderie."
          borderColor="border-rose-600"
        />
        <OurCoreValuesCard
          title="Learning Opportunity"
          desc="We value continuous learning and development, and we offer a range of opportunities for our employees to grow their skills and expand their knowledge."
          borderColor="border-orange-600"
          mt="lg:mt-4"
        />
        <OurCoreValuesCard
          title="Weekly Event"
          desc="Every week various events are organized in our company so that the employees are excited."
          borderColor="border-teal-600"
        />
        <OurCoreValuesCard
          title="Paid holiday leave"
          desc="To respect the diversity of our teams, we offer a total of 21 days paid leave."
          borderColor="border-blue-600"
          mt="lg:mt-4"
        />
      </div>
    </section>
  );
}
