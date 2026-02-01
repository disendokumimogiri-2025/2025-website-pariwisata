/* eslint-disable react-hooks/rules-of-hooks */
import MainLayout from "@/components/main-layout";
import { getRenderableDriveLink } from "@/helper/drive-helper";
import { useFetchBlogData } from "@/hooks/connection-hook/public-connection";
import { Tags } from "lucide-react";
import { useParams } from "react-router-dom";

export default function BlogScreen() {
  const { id } = useParams();
  if (!id) return;

  const { blogData } = useFetchBlogData(id);

  if (!blogData) return null

  return (
    <MainLayout>
      <div className="min-h-screen">
        <div className="w-full min-h-screen flex flex-col xl:gap-8 gap-5">
          {/* header background */}
          <div className="w-full aspect-video md:aspect-3/1 bg-gray-300 flex justify-center items-center overflow-hidden">
            <img src={getRenderableDriveLink(blogData?.blogcover)} alt="blog cover" className="w-full content-center object-cover" />
          </div>

          <div className="flex md:gap-5 gap-2">

            {/* content */}
            <div className="p-5 w-full md:w-[70%]">
              <div className="w-full min-h-screen">
                <div className="flex flex-col justify-start gap-5 w-full">
                  <h1 className="wrap-break-word text-5xl md:my-8 my-5">{blogData?.blogtitle}</h1>
                  <p className="text-justify wrap-break-word">
                    {blogData?.blogabstract}
                  </p>

                  {/* start */}
                  {blogData?.contents?.map((content, idx) =>
                    <div className="py-5 space-y-3" key={idx}>
                      <div className="w-full aspect-video bg-gray-300 overflow-hidden">
                        <img src={getRenderableDriveLink(content.image)} alt="image subheading" className="w-full content-center object-cover" />
                      </div>
                      <div className="space-y-5">
                        <h2 className="text-3xl md:my-5 my-2 wrap-break-word">{content.title}</h2>
                        <p className="text-justify">
                          {content.content}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* end */}

                </div>
              </div>
            </div>

            {/* side content */}
            <div className="hidden xl:flex xl:flex-col xl:gap-10 xl:w-[40vw] xl:p-8 xl:mt-5">
              <div className="w-full h-fit border border-gray-300 p-5 rounded-md flex flex-col gap-4">
                <div className="w-full flex flex-col gap-2">
                  <h2>Detail dan Keterangan</h2>

                  {/* start */}
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Tags className="w-5 h-5" />
                      <p className="text-sm">term_desc</p>
                    </div>
                  </div>
                  {/* end */}

                </div>

                <div className="w-full flex flex-col">
                  <h2>Harga</h2>
                  <p>{blogData?.price}</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}
