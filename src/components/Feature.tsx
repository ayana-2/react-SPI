
import feature1 from "/images/feature1.png";

function Feature() {
  return (
    <div id="feature">
      <section className="flex flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row md:px-16">

        <div>
          <img src={feature1} alt="Feature" className="w-full max-w-full" />
        </div>

        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-gray-800">
            The unseen of spending three years at Pixelgrade
          </h2>

          <p className="mt-5 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed sit amet justo ipsum. Sed accumsan quam vitae est
            aliquam, at porttitor elit. Nulla facilisi.
          </p>

          <button className="mt-8 rounded bg-green-500 px-7 py-3 text-white hover:bg-green-700">
            Learn More
          </button>
        </div>

      </section>
    </div>
  );
}

export default Feature;
