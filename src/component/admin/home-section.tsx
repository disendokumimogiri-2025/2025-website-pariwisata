interface HomeContenCardInterface {
  name: string;
  amt: number;
  activeamt: number;
  detaillink: string;
}

function HomeContenCard({ name, amt, activeamt, detaillink }: HomeContenCardInterface) {
  return (
    <div className="w-full py-3 px-5 rounded-2xl border border-gray-300 flex flex-col justify-between gap-2">
      <p className="w-full text-center">{name}</p>
      <div className="w-full h-[10vw] flex justify-center items-center text-5xl">
        {amt}
      </div>
      <div>
        <p className="text-sm my-1 font-bold">aktif {activeamt}</p>
        <button
          className="font-medium text-sm w-full justify-center items-center p-2 rounded-md bg-green-500 text-white cursor-pointer hover:bg-green-600"
          onClick={() => console.log(detaillink)}
        >
          Tampilkan Detail
        </button>
      </div>
    </div>
  )
}

export default function HomeSection() {
  return (
    <div className="w-full h-screen ">
      <div className="relative space-y-5">
        <div className="sticky top-0 w-full h-fit p-4 border border-gray-300 rounded-md bg-white">
          <h1>Home</h1>
        </div>

        <div className="w-full h-fit xl:px-5 space-y-12">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <HomeContenCard name={"Konten Paket Wisata"} amt={5} activeamt={5} detaillink="/hallo" />
            <HomeContenCard name={"Konten Edukasi"} amt={5} activeamt={5} detaillink="/hallo" />
            <HomeContenCard name={"Konten Kuliner"} amt={5} activeamt={5} detaillink="/hallo" />
          </div>

          <div className="w-full h-fit">
            <div className="mb-4 w-full flex justify-end">
              <div className="md:w-[20vw] w-full">
                <input
                  type="text" name="search kontent" placeholder="serach"
                  className="rounded-md w-full"
                />
              </div>
            </div>

            <div>
              {/* header part */}
              <div className="w-full grid grid-cols-6">
                <div className="w-full h-10 border-[0.1px] border-gray-300 flex justify-center items-center">
                  Link
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

              </div>

              {/* body part */}
              <div className="w-full">
                <div className="w-full grid grid-cols-6">
                  <div className="w-full h-10 border-[0.1px] border-gray-300" />
                  <div className="w-full h-10 col-span-3 border-[0.1px] border-gray-300" />
                  <div className="w-full h-10 border-[0.1px] border-gray-300" />
                  <div className="w-full h-10 border-[0.1px] border-gray-300" />
                </div>
                <div className="w-full grid grid-cols-6">
                  <div className="w-full h-10 border-[0.1px] border-gray-300" />
                  <div className="w-full h-10 col-span-3 border-[0.1px] border-gray-300" />
                  <div className="w-full h-10 border-[0.1px] border-gray-300" />
                  <div className="w-full h-10 border-[0.1px] border-gray-300" />
                </div>
                <div className="w-full grid grid-cols-6">
                  <div className="w-full h-10 border-[0.1px] border-gray-300" />
                  <div className="w-full h-10 col-span-3 border-[0.1px] border-gray-300" />
                  <div className="w-full h-10 border-[0.1px] border-gray-300" />
                  <div className="w-full h-10 border-[0.1px] border-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
