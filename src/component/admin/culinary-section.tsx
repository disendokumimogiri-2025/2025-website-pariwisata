import { SquarePlus } from "lucide-react";

export default function CulinarySection() {
  return (
    <div className="w-full h-screen ">
      <div className="relative space-y-5">
        <div className="sticky top-0 w-full h-fit p-4 border border-gray-300 rounded-md bg-white">
          <h1>Manajement Konten Kuliner</h1>
        </div>

        <div className="w-full flex justify-end">
          <div className="flex justify-center p-3 rounded-md bg-gray-300 gap-2 cursor-pointer">
            <SquarePlus />
            <p>Tambah konten</p>
          </div>
        </div>

        <div className="w-full h-fit">
          <div className="mb-4 w-full flex justify-start">
            <div className="md:w-[20vw] w-full">
              <input
                type="text" name="search kontent" placeholder="serach"
                className="rounded-md w-full"
              />
            </div>
          </div>

          <div>
            {/* header part */}
            <div className="w-full grid grid-cols-7">
              <div className="w-full h-10 border-[0.1px] border-gray-300 flex justify-center items-center">
                ID
              </div>
              <div className="w-full h-10 col-span-3 border-[0.1px] border-gray-300 flex justify-center items-center">
                Judul
              </div>
              <div className="w-full h-10 border-[0.1px] border-gray-300 flex justify-center items-center">
                Harga
              </div>
              <div className="w-full h-10 border-[0.1px] border-gray-300 flex justify-center items-center">
                Status
              </div>
              <div className="w-full h-10 border-[0.1px] border-gray-300 flex justify-center items-center">
                Action
              </div>
            </div>

            {/* body part */}
            <div className="w-full">
              <div className="w-full grid grid-cols-7">
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 col-span-3 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
              </div>
              <div className="w-full grid grid-cols-7">
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 col-span-3 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
              </div>
              <div className="w-full grid grid-cols-7">
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 col-span-3 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
              </div>
              <div className="w-full grid grid-cols-7">
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 col-span-3 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
                <div className="w-full h-10 border-[0.1px] border-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
