import hero from "/images/hero.png";

function Hero() {
  return (
    <div id="home">
      <section className="flex flex-col items-center justify-between gap-10 bg-gray-100 px-6 py-16 md:flex-row md:px-16 md:py-24">

        <div>
          <h1 className="text-4xl font-bold text-gray-800 md:text-6xl">
                Lessons and insights            <br />
            <span className="text-green-600">from 8 years</span>
          </h1>

          <p className="mt-5 text-sm text-gray-500">
            Where to grow your business as a photographer: site or social media?
          </p>

          <button className="mt-8 rounded bg-green-500 px-7 py-3 text-white hover:bg-green-700">
            Register
          </button>
        </div>

        <div>
          <img src={hero} alt="Hero" className="w-full max-w-md" />
        </div>

      </section>
    </div>
  );
}

export default Hero;


