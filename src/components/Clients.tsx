import client1 from "/images/client-1.png";
import client2 from "/images/client-2.png";
import client3 from "/images/client-3.png";
import client4 from "/images/client-4.png";
import client5 from "/images/client-5.png";
import client6 from "/images/client-6.png";
import client7 from "/images/client-7.png";

function Clients() {
  return (
    <div id="clients">
      <section className="px-6 py-12 md:px-16">

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Clients
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-8">
          <img src={client1} alt="Client" className="h-7" />
          <img src={client2} alt="Client" className="h-7" />
          <img src={client3} alt="Client" className="h-7" />
          <img src={client4} alt="Client" className="h-7" />
          <img src={client5} alt="Client" className="h-5" />
          <img src={client6} alt="Client" className="h-5" />
          <img src={client5} alt="Client" className="h-5" />
        </div>

      </section>
    </div>
  );
}

export default Clients;