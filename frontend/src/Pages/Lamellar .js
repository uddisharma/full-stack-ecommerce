import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Lamellar() {
  return (
    <div className="relative isolate overflow-hidden w-[90%] m-auto bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-black">
                LAMELLAR ICHTHYOSIS
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#4299e1]  sm:text-4xl">
                What is Lamellar ichthyosis ?
              </h1>
              <p className="mt-6 text-sm leading-8 text-gray-700">
                A rare skin disorder called lamellar ichthyosis (LI). It starts
                at birth and persists all the way through adulthood. Ichthyosis
                is caused by an anomaly in the skin's cornification or the
                process that produces the outer, dead layer of skin. It is known
                that ichthyosis can take many forms. Take note of the scaly
                appearance and dry skin.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[500px] h-[500px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://healthjade.net/wp-content/uploads/2019/08/lamellar-ichthyosis.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-[#4299e1] ">
                Symptoms
              </h2>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Having trouble feeding
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Fluid loss (dehydration)
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Loss of the body's mineral balance (electrolyte imbalance)
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Breathing difficulties
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Body-wide or
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Instability of body temperature
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
