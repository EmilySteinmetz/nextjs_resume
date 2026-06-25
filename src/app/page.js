export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10 text-gray-900">
      <article className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">
        <header className="border-b border-gray-300 pb-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Emily Steinmetz</h1>
          <p className="mt-2 text-sm text-gray-600">
            Tampa, Florida | (813) 838-7795 | steinmetz.emilyy@gmail.com
          </p>
          <p className="mt-1 text-sm text-gray-600">
            LinkedIn: linkedin.com/in/emily-steinmetz-1643aa3a8
          </p>
        </header>
        <section className="mt-8">
  <h2 className="border-b border-gray-200 pb-2 text-xl font-bold uppercase tracking-wide">
    Summary
  </h2>
  <p className="mt-4 text-gray-700 leading-7">
    Business Analytics and Information Systems student with strong analytical,
    customer service, and operational experience in fast-paced environments.
    Skilled at problem-solving, communication, and supporting efficient
    business operations through attention to detail, teamwork, and data-driven
    thinking. Eager to apply technical and analytical skills in a business
    analytics or operations-focused internship.
  </p>
</section>

        <section className="mt-8">
          <h2 className="border-b border-gray-200 pb-2 text-xl font-bold uppercase tracking-wide">
            Education
          </h2>
          <div className="mt-4">
            <h3 className="font-semibold">
              University of South Florida, Muma College of Business – Tampa, FL
            </h3>
            <p className="text-gray-700">
              Bachelor of Science in Business Analytics and Information Systems
            </p>
            <p className="text-gray-700">
              GPA: 3.9/4.0 | Expected Graduation: May 2027
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold">Relevant Coursework:</span>{" "}
              Principles of Financial & Managerial Accounting, Business &
              Economic Statistics
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="border-b border-gray-200 pb-2 text-xl font-bold uppercase tracking-wide">
            Work Experience
          </h2>

          <div className="mt-4">
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <h3 className="font-semibold">
                Koizi Endless Hibachi & Sushi Eatery – Host
              </h3>
              <p className="text-sm text-gray-600">Apr 2026 – Present</p>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
              <li>
                Greet guests, manage seating, and maintain an organized waitlist
                during high-volume service periods.
              </li>
              <li>
                Coordinate communication between guests, servers, and managers
                to support efficient front-of-house operations.
              </li>
              <li>
                Manage phone communications, coordinate guest flow, and support
                daily restaurant operations.
              </li>
              <li>
                Resolve guest concerns professionally while delivering excellent
                customer service in a fast-paced environment.
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <h3 className="font-semibold">Culver's Restaurant – Crew Member</h3>
              <p className="text-sm text-gray-600">Jan 2023 – Jul 2024</p>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
              <li>
                Rotated across multiple operational roles to maintain efficient
                service flow.
              </li>
              <li>
                Processed high-volume transactions with strong accuracy and
                attention to detail.
              </li>
              <li>
                Adapted responsibilities in real time during peak demand to
                ensure operational efficiency.
              </li>
              <li>
                Contributed to team operations generating $5K–$7K in sales per
                shift by efficiently managing high-volume order flow.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="border-b border-gray-200 pb-2 text-xl font-bold uppercase tracking-wide">
            Volunteer Experience
          </h2>

          <div className="mt-4">
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <h3 className="font-semibold">
                Wiregrass Elementary School – Classroom & Administrative
                Volunteer
              </h3>
              <p className="text-sm text-gray-600">Aug 2017 – May 2023</p>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
              <li>
                Supported classroom workflow and assisted with organizing
                instructional materials.
              </li>
              <li>
                Supported front office administrative tasks and data-related
                projects.
              </li>
              <li>
                Assisted the school clinic by helping students with basic needs,
                including providing ice packs and supporting staff with routine
                student care.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="border-b border-gray-200 pb-2 text-xl font-bold uppercase tracking-wide">
            Extracurricular Activities
          </h2>

          <div className="mt-4">
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <h3 className="font-semibold">
                Odyssey of the Mind – Competitive Team Member
              </h3>
              <p className="text-sm text-gray-600">Aug 2016 – May 2022</p>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
              <li>
                Applied analytical reasoning and creative problem-solving to
                open-ended challenges.
              </li>
              <li>
                Collaborated with team members to design and test solutions
                under time and resource constraints.
              </li>
              <li>
                Advanced to State and World-level competitions (2021–2022).
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="border-b border-gray-200 pb-2 text-xl font-bold uppercase tracking-wide">
            Skills
          </h2>
          <div className="mt-4 space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Technical Skills:</span> Tableau |
              Microsoft Excel (formulas, PivotTables) | Python | Microsoft
              Office
            </p>
            <p>
              <span className="font-semibold">Professional Skills:</span>{" "}
              Analytical Thinking | Attention to Detail | Adaptability | Team
              Collaboration | Problem-Solving
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}