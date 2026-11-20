
import membership from "/images/membership.png";
import associations from "/images/associations.png";
import clubs from "/images/clubs.png";

function Services() {
  return (
    <div id="community">
      <section className="px-6 py-12 md:px-16">

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Manage your entire community <br />
            in a single system
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">

          <div className="rounded-lg p-8 text-center shadow-md">
            <img src={membership} alt="Membership" className="mx-auto h-16" />

            <h3 className="mt-5 text-2xl font-bold text-gray-800">
              Membership Organisations
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              Our membership management software provides full automation
              of membership renewals and payments.
            </p>
          </div>

          <div className="rounded-lg p-8 text-center shadow-md">
            <img src={associations} alt="Associations" className="mx-auto h-16" />

            <h3 className="mt-5 text-2xl font-bold text-gray-800">
              National Associations
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              Our association management software helps organizations
              manage their members and activities.
            </p>
          </div>

          <div className="rounded-lg p-8 text-center shadow-md">
            <img src={clubs} alt="Clubs" className="mx-auto h-16" />

            <h3 className="mt-5 text-2xl font-bold text-gray-800">
              Clubs And Groups
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              Manage your clubs, members, registrations and payments
              with an easy system.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
}

export default Services;
