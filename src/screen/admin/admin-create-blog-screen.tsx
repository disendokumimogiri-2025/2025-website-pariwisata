import PrematureMainLayout from "@/components/admin/premature-layout";
import { PencilRuler, Tags } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel } from "@/components/ui/field"
import React from "react";
import type { AdderContentBlogComponentProps, BlogContentData, BlogData } from "@/types/data-types";
import { AdminCreateEditContext } from "@/context-provider/context-provider-type";
import { getDriveId, getRenderableDriveLink } from "@/helper/drive-helper";
import { useCreateBlog } from "@/hooks/connection-hook/admin-connection";

export function AdderContentBlogComponent({
  data,
  onAdd,
  onDelete,
}: AdderContentBlogComponentProps) {

  const [title, setTitle] = React.useState(data.title);
  const [content, setContent] = React.useState(data.content);
  const [image, setImage] = React.useState(data.image ?? '');

  const [isOk, setIsOk] = React.useState(false);

  const handleOk = () => {
    setIsOk(true);
    onAdd({
      ...data,
      title,
      content,
      image,
    });
  };

  return (
    <Collapsible>
      <CollapsibleTrigger className="p-4 rounded-md border border-gray-200 w-full text-start font-semibold">
        Topic Content
      </CollapsibleTrigger>

      <CollapsibleContent className="px-2 py-3 space-y-3">
        <Field>
          <FieldLabel>Content Title</FieldLabel>
          <Textarea value={title} onChange={e => setTitle(e.target.value)} />

          <FieldLabel>Paragraphs</FieldLabel>
          <Textarea value={content} onChange={e => setContent(e.target.value)} />

          <FieldLabel>Image</FieldLabel>
          <Input value={image} onChange={e => setImage(getDriveId(e.target.value))} />

          <div className="flex gap-2">
            <Button variant="outline" onClick={handleOk} disabled={isOk}>
              OK
            </Button>

            <Button
              variant="destructive"
              onClick={() => onDelete(data.ordernum)}
            >
              Hapus
            </Button>
          </div>
        </Field>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function AdminCreateBlogScreen() {
  const { setBlogcontent, headdata, metadata, blogcontent } = React.useContext(AdminCreateEditContext);
  const [blogContent, setBlogContent] = React.useState<BlogContentData[] | null>(blogcontent);
  const { createBlog, loading, error, } = useCreateBlog<BlogData, BlogData>();

  const handleSubmit = async () => {
    if (!headdata || !metadata || !blogContent || !blogcontent || blogcontent.length < 1) return;
    try {
      await createBlog({
        blogtitle: headdata?.blogtitle,
        blogabstract: headdata?.blogabstract,
        blogcover: headdata?.blogcover,
        isClinary: headdata?.isClinary,
        contents: blogcontent,
        desc: metadata?.desc,
        name: metadata?.name,
        imageplaceholder: metadata?.imageplaceholder,
        price: metadata?.price,
        prior: metadata?.prior,
        status: metadata?.status
      })
    } catch { console.log(error) }
  }

  const addOrUpdateContent = (data: BlogContentData) => {
    setBlogContent(prev => {
      if (!prev) return [data];
      const exists = prev.find(item => item.ordernum === data.ordernum);
      if (exists) {
        return prev.map(item =>
          item.ordernum === data.ordernum ? data : item
        );
      }
      return [...prev, data];
    });
  };

  const deleteContent = (ordernum: number) => {
    setBlogContent(prev => prev ? prev.filter(item => item.ordernum !== ordernum) : null);
  };

  const createNewContent = () => {
    setBlogContent(prev => {
      if (!prev) return [{
        ordernum: 1,
        title: '',
        content: '',
        image: '',
      }];
      return [
        ...prev,
        {
          ordernum: prev.length + 1,
          title: '',
          content: '',
          image: '',
        },
      ];
    });
  };

  if (loading) return <div>Loading Screen</div>


  return (
    <PrematureMainLayout>
      <div className="w-full min-h-screen flex flex-col xl:gap-8 gap-5">
        {/* header background */}
        <div className="w-full aspect-video md:aspect-3/1 bg-gray-300 flex justify-center items-center overflow-hidden">
          <img src={getRenderableDriveLink(headdata?.blogcover)} alt="blog vcver" className="w-full content-center object-cover" />
        </div>

        <div className="flex md:gap-5 gap-2">

          {/* content */}
          <div className="p-5 w-full md:w-[70%]">
            <div className="w-full min-h-screen">
              <div className="flex flex-col justify-start gap-5 w-full">
                <h1 className="wrap-break-word text-5xl md:my-8 my-5">{headdata?.blogtitle}</h1>
                <p className="text-justify wrap-break-word">
                  {headdata?.blogabstract}
                </p>

                {/* start */}
                {blogContent?.map((content, idx) =>
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
                <p>{metadata?.price}</p>
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className='fixed bottom-[20vw] xl:bottom-[5vw] left-[10vw] xl:left-[3vw]'>
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <PencilRuler className="md:w-20 w-24 md:h-20 h-24" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit Landing Page Kontent</SheetTitle>
                <SheetDescription>
                  Setelah anda yakin dengan perubhan klik ok dan cancle untuk mengundo semua perubahan.
                </SheetDescription>
              </SheetHeader>
              <div className='overflow-y-scroll'>
                <div className='h-[80vh] px-5 space-y-5'>

                  {blogContent?.map(item => (
                    <AdderContentBlogComponent
                      key={item.ordernum}
                      data={item}
                      onAdd={addOrUpdateContent}
                      onDelete={deleteContent}
                    />
                  ))}

                  <Button onClick={createNewContent}>Tambah</Button>
                </div>
              </div>
              <SheetFooter>
                <Button type="submit" onClick={() => {
                  setBlogcontent(blogContent);
                  handleSubmit();
                }}>
                  Submit
                </Button>
                <SheetClose asChild>
                  <Button variant="outline">Cancle</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </PrematureMainLayout>
  );
}
