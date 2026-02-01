/* eslint-disable react-hooks/rules-of-hooks */
import PrematureMainLayout from "@/components/admin/premature-layout";
import { SouvenirCardView } from "@/components/public/landing/courasel-cards";
import { useFetchSouvenirData } from "@/hooks/connection-hook/public-connection";
import { useParams } from "react-router-dom";

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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel } from "@/components/ui/field"

import React from "react";
import { getDriveId, getRenderableDriveLink } from "@/helper/drive-helper";
import type { SouvenirData } from "@/types/data-types";
import { useUpdateSouvenir } from "@/hooks/connection-hook/admin-connection";
import { SquarePen } from "lucide-react";
import LoadContent from "@/components/admin/load-content";

export function EditMetadatasouvenirCard({ d }: { d: SouvenirData }) {
  const [name, setName] = React.useState(d.name);
  const [desc, setDesc] = React.useState(d.desc);
  const [imageplaceholder, setImageplaceholder] = React.useState(getRenderableDriveLink(d.imageplaceholder));

  const [stock, setStock] = React.useState(d.stock)
  const [price, setPrice] = React.useState(d.price)

  const { updateSouvenirData, loading } = useUpdateSouvenir(d._id ?? '')

  const handleSubmit = async () => {
    try {
      await updateSouvenirData({
        name: name,
        desc: desc,
        stock: stock,
        price: price,
        imageplaceholder: getDriveId(d.imageplaceholder),
        contenttitle: d.contenttitle,
        contentdesc: d.contentdesc,
        contentimage: getDriveId(d.contentimage),
      })
    } catch (error) {
      console.log(error)
    }
  }

  if (loading) return <LoadContent />

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <SquarePen className="md:w-20 w-24 md:h-20 h-24" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Souvenir Card Metadata</SheetTitle>
            <SheetDescription>
              Setelah anda yakin dengan perubhan klik ok dan cancle untuk mengundo semua perubahan.
            </SheetDescription>
          </SheetHeader>
          <div className='overflow-y-scroll'>
            <div className='h-[80vh] px-5 space-y-5'>
              <Field>
                <FieldLabel htmlFor="name">Souvenir Card Name</FieldLabel>
                <Textarea
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="resize-none"
                />

                <FieldLabel htmlFor="desc">Souvenir Card Description</FieldLabel>
                <Textarea
                  id="desc"
                  required
                  className="resize-none"
                  onChange={(e) => setDesc(e.target.value)}
                  value={desc}
                />

                <FieldLabel htmlFor="imageplaceholder">Image Placeholder Card Description</FieldLabel>
                <Input
                  id="imageplaceholder"
                  required
                  className="resize-none"
                  onChange={(e) => setImageplaceholder(e.target.value)}
                  value={imageplaceholder}
                />

                <FieldLabel htmlFor="stock">Souvenir Price</FieldLabel>
                <Input
                  id="stock"
                  required
                  className="resize-none"
                  onChange={(e) => setStock(Number(e.target.value))}
                  value={stock}
                />

                <FieldLabel htmlFor="price">Souvenir Price</FieldLabel>
                <Input
                  id="price"
                  required
                  className="resize-none"
                  onChange={(e) => setPrice(Number(e.target.value))}
                  value={price}
                />

              </Field>
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
  );
}

export function EditContentSouvenirCard({ d }: { d: SouvenirData }) {
  const [contenttitle, setContenttitle] = React.useState(d.contenttitle);
  const [contentdesc, setContentdesc] = React.useState(d.contentdesc);
  const [contentimage, setContentimage] = React.useState(getRenderableDriveLink(d.contentimage));

  const { updateSouvenirData, loading } = useUpdateSouvenir(d._id ?? '')

  const handleSubmit = async () => {
    try {
      await updateSouvenirData({
        name: d.name,
        desc: d.desc,
        stock: d.stock,
        price: d.price,
        imageplaceholder: getDriveId(d.imageplaceholder),
        contenttitle: contenttitle,
        contentdesc: contentdesc,
        contentimage: getDriveId(contentimage),
      })
    } catch (error) {
      console.log(error)
    }
  }

  if (loading) return <LoadContent />

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <SquarePen className="md:w-20 w-24 md:h-20 h-24" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Souvenir Content</SheetTitle>
            <SheetDescription>
              Setelah anda yakin dengan perubhan klik ok dan cancle untuk mengundo semua perubahan.
            </SheetDescription>
          </SheetHeader>
          <div className='overflow-y-scroll'>
            <div className='h-[80vh] px-5 space-y-5'>
              <Field>
                <FieldLabel htmlFor="contenttitle">Souvenir Card Name</FieldLabel>
                <Textarea
                  required
                  value={contenttitle}
                  onChange={(e) => setContenttitle(e.target.value)}
                  id="name"
                  className="resize-none"
                />

                <FieldLabel htmlFor="contentdesc">Souvenir Card Description</FieldLabel>
                <Textarea
                  id="contentdesc"
                  required
                  className="resize-none"
                  onChange={(e) => setContentdesc(e.target.value)}
                  value={contentdesc}
                />

                <FieldLabel htmlFor="contentimage">Image Showcase Souvenir</FieldLabel>
                <Input
                  id="contentimage"
                  required
                  className="resize-none"
                  onChange={(e) => setContentimage(e.target.value)}
                  value={contentimage}
                />
              </Field>
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
  );
}

export default function AdminEditSouvenirScreen() {
  const { id } = useParams();
  if (!id) return;

  const { souvData, loading, error, message } = useFetchSouvenirData(id);

  console.log(souvData);

  if (!souvData) return null

  if (loading) return <LoadContent />
  if (error) return <div>{error}{message}</div>

  return (
    <PrematureMainLayout>
      <div className="min-h-screen w-full pt-[35vw] px-10 sm:pt-[24vw] md:pt-[12vw] lg:pt-[8vw] pb-20 space-y-10">

        {/* card section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <EditMetadatasouvenirCard d={souvData} />
            <h1 className="text-xl">Card Overview</h1>
          </div>
          <div className="w-full flex xl:justify-between xl:items-start justify-center">
            <div className="xl:w-[50%] w-[80%] border border-gray-300 rounded-md xl:p-8 p-5">
              <SouvenirCardView d={souvData} />
            </div>
          </div>
        </div>
        {/* card section */}

        {/* content section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <EditContentSouvenirCard d={souvData} />
            <h1 className="text-xl">Content Overview</h1>
          </div>
          <div className="bg-white border border-gray-300 rounded-md p-8">
            {/* <EducationCard d={eduData} /> */}
          </div>
        </div>
        {/* content section */}
      </div>
    </PrematureMainLayout>
  );
}
