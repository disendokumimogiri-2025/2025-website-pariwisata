/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel } from "@/components/ui/field"
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle"
import { BookmarkIcon, Utensils } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { getDriveId } from "@/helper/drive-helper";
import { AdminCreateEditContext } from "@/context-provider/context-provider-type";

function CardCreation() {
  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [imageplaceholder, setImageplaceholder] = React.useState('');

  const [isPrior, setIsPrior] = React.useState(false);

  const { setMetadata } = React.useContext(AdminCreateEditContext)

  const [isCheck, setIsCheck] = React.useState(false);

  return (
    <div className="p-5">
      <h2 className="py-4 text-lg">Blog Card Metadata</h2>
      <Field>
        <FieldLabel htmlFor="name">Content Name</FieldLabel>
        <Textarea
          required
          id="name"
          placeholder="Lumbung Mataraman Sriharjo"
          className="resize-none"
          value={name}
          onChange={(e) => { setName(e.target.value); setIsCheck(false); }}
        />
        <FieldLabel htmlFor="desc">Content Description</FieldLabel>
        <Textarea
          required
          id="desc"
          placeholder="Lumbung Mataraman Sriharjo"
          className="resize-none"
          value={desc}
          onChange={(e) => { setDesc(e.target.value); setIsCheck(false); }}
        />
        <FieldLabel htmlFor="price">Price</FieldLabel>
        <Input
          id="price"
          className="resize-none"
          value={price}
          onChange={(e) => { setPrice(Number(e.target.value)); setIsCheck(false); }}
        />
        <FieldLabel htmlFor="imageplaceholder">Content Image Placeholder</FieldLabel>
        <Input
          id="imageplaceholder"
          className="resize-none"
          value={imageplaceholder}
          onChange={(e) => { setImageplaceholder(e.target.value); setIsCheck(false); }}
        />
        <div onClick={() => { setIsPrior(!isPrior); setIsCheck(false); }}>
          <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
            <BookmarkIcon className={`${isPrior ? 'fill-black' : ''}`} />
            Show in Landing
          </Toggle>
        </div>
        <div className="md:w-[40%]">
          <Button
            disabled={isCheck}
            onClick={() => {
              setMetadata({
                name: name,
                desc: desc,
                imageplaceholder: getDriveId(imageplaceholder),
                price: price,
                prior: isPrior,
                status: 0,
              });
              setIsCheck(true)
            }}
          >
            Generate
          </Button>
        </div>
      </Field>
    </div>
  );
}

function HeadData() {
  const [blogtitle, setBlogtitle] = React.useState('');
  const [blogabstract, setBlogabstract] = React.useState('');
  const [blogcover, setBlogcover] = React.useState('');

  const [isCulinary, setIsCulinary] = React.useState(false);

  const { setHeaddata } = React.useContext(AdminCreateEditContext);

  const usenavigate = useNavigate();

  return (
    <div className="p-5">
      <h2 className="py-4 text-lg">Blog Header</h2>
      <Field>
        <FieldLabel htmlFor="blogtitle">Blog Titile</FieldLabel>
        <Textarea
          required
          value={blogtitle}
          onChange={(e) => setBlogtitle(e.target.value)}
          id="blogtitle"
          placeholder="Lumbung Mataraman Sriharjo"
          className="resize-none"
        />
        <FieldLabel htmlFor="blogabstract">Blog Abstract</FieldLabel>
        <Textarea
          required
          value={blogabstract}
          onChange={(e) => setBlogabstract(e.target.value)}
          id="blogabstract"
          placeholder="Lumbung Mataraman Sriharjo"
          className="resize-none"
        />
        <FieldLabel htmlFor="blogcover">Blog Image Cover</FieldLabel>
        <Input
          id="blogcover"
          required
          className="resize-none"
          onChange={(e) => setBlogcover(getDriveId(e.target.value))}
          value={blogcover}
        />
        <div onClick={() => setIsCulinary(!isCulinary)}>
          <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
            <Utensils className={`${isCulinary ? 'fill-black' : ''}`} />
            Konten Kuliner ?
          </Toggle>
        </div>
        <div className="md:w-[40%]">
          <Button
            onClick={() => {
              setHeaddata({
                blogtitle: blogtitle,
                isClinary: isCulinary === true ? 1 : 0,
                blogabstract: blogabstract,
                blogcover: getDriveId(blogabstract),
              })
              usenavigate('/admin/blog/create')
            }}
          >
            Lanjut Edit Konten
          </Button>
        </div>
      </Field>
    </div>
  )
}

export default function BlogSection() {

  const { setBlogcontent, setData, setHeaddata, setMetadata, resetAlldata } = React.useContext(AdminCreateEditContext);

  React.useEffect(() => {
    setBlogcontent(null);
    setData(null);
    setHeaddata(null);
    setMetadata(null);
    resetAlldata();
  }, [])

  return (
    <div className='w-full p-10'>
      <h1 className="text-xl">Buat Blog dengan Template ini</h1>

      {/* card mode */}
      <CardCreation />

      {/* pages mode */}
      <HeadData />

    </div>
  );
}
