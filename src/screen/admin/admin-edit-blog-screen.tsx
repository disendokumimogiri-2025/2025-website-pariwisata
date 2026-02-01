/* eslint-disable react-hooks/rules-of-hooks */
import LoadContent from "@/components/admin/load-content";
import PrematureMainLayout from "@/components/admin/premature-layout";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { AdminCreateEditContext } from "@/context-provider/context-provider-type";
import { getDriveId, getRenderableDriveLink } from "@/helper/drive-helper";
import { useUpdateBlog } from "@/hooks/connection-hook/admin-connection";
import { useFetchBlogData } from "@/hooks/connection-hook/public-connection";
import { type AdderContentBlogComponentProps, type BlogContentData, type BlogHeadData, type HeadDataProps } from "@/types/data-types";
import { PencilRuler, Tags } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";

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
    const driveId = getDriveId(image)
    onAdd({
      ...data,
      title,
      content,
      image: driveId,
    });
  };

  return (
    <Collapsible defaultOpen>
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
          <Input value={image} onChange={e => setImage(e.target.value)} />

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

export function HeadDataComponent({
  blogtitle,
  blogabstract,
  blogcover,
  setBlogtitle,
  setBlogabstract,
  setBlogcover,
}: HeadDataProps) {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger className="p-4 rounded-md border border-gray-200 w-full text-start font-semibold">
        Blog Head Data
      </CollapsibleTrigger>

      <CollapsibleContent className="px-2 py-3 space-y-3">
        <Field>
          <FieldLabel>Blog Title</FieldLabel>
          <Textarea
            value={blogtitle}
            onChange={(e) => setBlogtitle(e.target.value)}
          />

          <FieldLabel>Blog Abstract</FieldLabel>
          <Textarea
            value={blogabstract}
            onChange={(e) => setBlogabstract(e.target.value)}
          />

          <FieldLabel>Blog Image Cover</FieldLabel>
          <Input
            value={blogcover}
            onChange={(e) => setBlogcover(e.target.value)}
          />
        </Field>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function AdminEditBlogScreen() {
  const { id } = useParams();
  if (!id) return;

  const { blogData, loading, error, message } = useFetchBlogData(id)

  const [blogContent, setBlogContent] = React.useState<BlogContentData[] | null>(blogData?.contents ?? []);
  const [blogheaddata, setBlogheaddata] = React.useState<BlogHeadData | null>(blogData)

  React.useEffect(() => {
    if (blogData?.contents) {
      setBlogContent(blogData.contents);
    }

    if (blogData) {
      setBlogheaddata(blogData);
    }
  }, [blogData]);

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

  const deleteContent = (ordernum: number) => {
    setBlogContent(prev => prev ? prev.filter(item => item.ordernum !== ordernum) : null);
  }

  const updateHeadData = <K extends keyof BlogHeadData>(
    key: K,
    value: BlogHeadData[K]
  ) => {
    setBlogheaddata(prev =>
      prev ? { ...prev, [key]: value } : prev
    );
  };

  const { updateBlogData } = useUpdateBlog(id);
  const { flag, setFlag } = React.useContext(AdminCreateEditContext)

  const handleSubmit = async () => {
    if (!blogheaddata || !blogData) return
    try {
      await updateBlogData({
        name: blogData?.name,
        desc: blogData?.desc,
        status: blogData?.status,
        price: blogData.price,
        prior: blogData.prior,
        imageplaceholder: blogData.imageplaceholder,
        blogtitle: blogheaddata.blogtitle,
        blogabstract: blogheaddata.blogabstract,
        blogcover: getDriveId(blogheaddata.blogcover ?? ''),
        isClinary: blogheaddata.isClinary,
        contents: blogContent,
      })
      setFlag(!flag);
      window.location.href = `/admin/blog/edit/${id}`;
    } catch (error) {
      console.log(error)
      console.log(message)
    }
  }

  if (loading) return <LoadContent />

  if (error) return <div>{error}{message}</div>

  return (
    <PrematureMainLayout>
      <div className="w-full min-h-screen flex flex-col xl:gap-8 gap-5">
        {/* header background */}
        <div className="w-full aspect-video md:aspect-3/1 bg-gray-300 flex justify-center items-center overflow-hidden">
          <img src={getRenderableDriveLink(blogData?.blogcover)} alt="blog vcver" className="w-full content-center object-cover" />
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
                <p>{blogData?.price}</p>
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className='fixed bottom-[20vw] xl:bottom-[5vw] left-[10vw] xl:left-[3vw]'>
        <div>
          <Sheet>
            <SheetTrigger>
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

                  {blogheaddata && (
                    <HeadDataComponent
                      blogtitle={blogheaddata.blogtitle || ''}
                      blogabstract={blogheaddata.blogabstract || ''}
                      blogcover={getRenderableDriveLink(blogheaddata.blogcover) || ''}
                      setBlogtitle={(v) => updateHeadData("blogtitle", v)}
                      setBlogabstract={(v) => updateHeadData("blogabstract", v)}
                      setBlogcover={(v) => updateHeadData("blogcover", v)}
                    />
                  )}


                  {blogContent?.map(item => (
                    <AdderContentBlogComponent
                      key={item.ordernum}
                      data={item}
                      onAdd={addOrUpdateContent}
                      onDelete={deleteContent}
                    />
                  ))}

                  <Button onClick={createNewContent}>Tambah Content</Button>
                </div>
              </div>
              <SheetFooter>
                <Button type="submit" onClick={() => handleSubmit()}>
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
