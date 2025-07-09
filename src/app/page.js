import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePage() {
  return (
    <div>
      <header className="bg-[#118856] text-white">
        <div className="flex flex-row items-center justify-between max-w-6xl mx-auto p-5">
          <div>
            <h1 className="text-4xl italic font-bold">Devant</h1>
          </div>
          <div>
            <ul className="flex flex-row space-x-4 text-lg">
              <li className="hover:underline transition duration-300 ease-in-out">
                Home
              </li>
              <li className="hover:underline transition duration-300 ease-in-out">
                About
              </li>
              <li className="hover:underline transition duration-300 ease-in-out">
                Products
              </li>
              <li className="hover:underline transition duration-300 ease-in-out">
                News
              </li>
              <li className="hover:underline transition duration-300 ease-in-out">
                Support
              </li>
              <li className="hover:underline transition duration-300 ease-in-out">
                Careers
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section className="bg-[#f5f5f5] p-14">
        <div className="max-w-6xl mx-auto p-10 flex flex-col space-y-10">
          <p className="text-5xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-2xl">
            Vel odio quis sed, assumenda tempora ipsam praesentium qui molestiae
            minus veritatis incidunt similique nesciunt ad in commodi dicta
            possimus odit nulla.
          </p>
          <div>
            <Button size="lg">Button</Button>
          </div>
        </div>
      </section>
      <section className="bg-[#509F3E] p-10">
        <div>
          <p className="text-white text-2xl font-bold text-center p-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            veritatis quisquam culpa provident fuga, ad placeat assumenda
            voluptatum repellendus. Obcaecati, voluptatem. Quisquam iure saepe
            magni ab, ipsam dolorem exercitationem modi!
          </p>
          <div className="grid grid-cols-3 justify-items-center">
            <div className="bg-white h-48 w-3/4" />
            <div className="bg-white h-48 w-3/4" />
            <div className="bg-white h-48 w-3/4" />
          </div>
        </div>
      </section>
      <section className="bg-[#343434]">
        <div className="max-w-6xl mx-auto p-5 py-10 flex justify-between items-center text-white">
          <div>
            <h4 className="text-4xl italic text-white font-bold">Devant</h4>
          </div>
          <div>Copyright © 2025 Devant. All rights reserved.</div>
        </div>
      </section>
    </div>
  );
}
