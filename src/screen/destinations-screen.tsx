import MainLayout from "../component/main-layout"

export default function DestinationsScreen() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen flex flex-col xl:gap-8 gap-5">
        {/* header background */}
        <div className="w-full aspect-video md:aspect-3/1 bg-gray-300 flex justify-center items-center">Background</div>

        <div className="flex md:gap-5 gap-2">

          {/* content */}
          <div className="p-5 w-full">
            <div className="w-full min-h-screen">
              <div className="flex flex-col justify-start gap-5">
                <h1 className="text-5xl md:my-8 my-5">Title</h1>
                <p className="text-justify">
                  Aliquip id laboris Lorem nulla nulla. Cillum ipsum deserunt laborum adipisicing.
                  Voluptate occaecat minim deserunt labore quis.
                  Commodo consectetur elit eiusmod consequat aliquip nisi consequat eiusmod aute do magna duis minim.
                  Aliquip id laboris Lorem nulla nulla. Cillum ipsum deserunt laborum adipisicing.
                  Voluptate occaecat minim deserunt labore quis.
                  Commodo consectetur elit eiusmod consequat aliquip nisi consequat eiusmod aute do magna duis minim.
                  Aliquip id laboris Lorem nulla nulla. Cillum ipsum deserunt laborum adipisicing.
                  Voluptate occaecat minim deserunt labore quis.
                  Commodo consectetur elit eiusmod consequat aliquip nisi consequat eiusmod aute do magna duis minim.
                </p>
                <div className="w-full aspect-video bg-red-500"></div>
                <h2 className="text-3xl md:my-5 my-2">Subtitle</h2>
                <p className="text-justify">
                  Aliquip id laboris Lorem nulla nulla. Cillum ipsum deserunt laborum adipisicing.
                  Voluptate occaecat minim deserunt labore quis.
                  Commodo consectetur elit eiusmod consequat aliquip nisi consequat eiusmod aute do magna duis minim.
                  Aliquip id laboris Lorem nulla nulla. Cillum ipsum deserunt laborum adipisicing.
                  Voluptate occaecat minim deserunt labore quis.
                </p>
                <p className="text-justify">
                  Aliquip id laboris Lorem nulla nulla. Cillum ipsum deserunt laborum adipisicing.
                  Voluptate occaecat minim deserunt labore quis.
                  Commodo consectetur elit eiusmod consequat aliquip nisi consequat eiusmod aute do magna duis minim.
                  Aliquip id laboris Lorem nulla nulla. Cillum ipsum deserunt laborum adipisicing.
                  Voluptate occaecat minim deserunt labore quis.
                </p>
              </div>
            </div>
          </div>

          {/* side content */}
          <div className="hidden md:flex md:w-[40vw]">
          </div>
        </div>

      </div>
    </MainLayout>
  );
}
