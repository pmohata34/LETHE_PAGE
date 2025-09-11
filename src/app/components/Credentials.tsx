"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Credentials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3,
   });

  return (
    <section
      ref={ref}
      className="text-white py-16 rounded-2xl max-w-6xl mx-auto mt-16"
    >
      <h2 className="text-5xl font-bold text-center mb-12">
        <span className="italic">Our</span> Credentials
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {/* Item 1 */}
        <div>
          <h3 className="text-5xl font-extrabold">
            {inView && <CountUp end={250} suffix="m+" duration={2.5} />}
          </h3>
          <p className="mt-3 text-lg font-medium">
            Devices securely erased
          </p>
        </div>

        {/* Item 2 */}
        <div>
          <h3 className="text-5xl font-extrabold">
            {inView && <CountUp end={25} suffix="+" duration={2} />}
          </h3>
          <p className="mt-3 text-lg font-medium">
            Supported erasure standards
          </p>
        </div>

        {/* Item 3 */}
        <div>
          <h3 className="text-5xl font-extrabold">
            {inView && <CountUp end={14} suffix="+" duration={2} />}
          </h3>
          <p className="mt-3 text-lg font-medium">
            Global certifications <br /> & recommendations
          </p>
        </div>

        {/* Item 4 */}
        <div>
          <h3 className="text-5xl font-extrabold">
            {inView && <CountUp end={60} duration={2} />}
          </h3>
          <p className="mt-3 text-lg font-medium">
            Net Promoter Score <br /> (May–July 25 Quarter)
          </p>
        </div>
      </div>
    </section>
  );
}
