/* eslint-disable react-hooks/rules-of-hooks */
import PrematureMainLayout from "@/components/admin/premature-layout";
import EducationCard from "@/components/public/education/education-card";
import { EdukasiPublikasiCard } from "@/components/public/landing/courasel-cards";
import { useFetchEduData } from "@/hooks/connection-hook/public-connection";
import { SquarePen } from "lucide-react";
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
import React from "react";
import type { EducationData } from "@/types/data-types";
import { getDriveId, getRenderableDriveLink } from "@/helper/drive-helper";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel } from "@/components/ui/field"
import { useUpdateEdu } from "@/hooks/connection-hook/admin-connection";
import LoadContent from "@/components/admin/load-content";

export function EditMetadataEducationCard({ d }: { d: EducationData }) {
  const [name, setName] = React.useState(d.name);
  const [desc, setDesc] = React.useState(d.desc);
  const [imageplaceholder, setImageplaceholder] = React.useState(getRenderableDriveLink(d.imageplaceholder));

  const { updateEduData, loading } = useUpdateEdu(d._id ?? '')

  const handleSubmit = async () => {
    try {
      await updateEduData({
        name: name,
        desc: desc,
        status: d.status,
        imageplaceholder: getDriveId(imageplaceholder),
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
            <SheetTitle>Edit Education and Publication Card Metadata</SheetTitle>
            <SheetDescription>
              Setelah anda yakin dengan perubhan klik ok dan cancle untuk mengundo semua perubahan.
            </SheetDescription>
          </SheetHeader>
          <div className='overflow-y-scroll'>
            <div className='h-[80vh] px-5 space-y-5'>
              <Field>
                <FieldLabel htmlFor="name">Education Card Name</FieldLabel>
                <Textarea
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="resize-none"
                />

                <FieldLabel htmlFor="desc">Education Card Description</FieldLabel>
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

export function EditContentEducationCard({ d }: { d: EducationData }) {
  const [contenttitle, setContenttitle] = React.useState(d.contenttitle);
  const [contentdesc, setContentdesc] = React.useState(d.contentdesc);
  const [contentimage, setContentimage] = React.useState(getRenderableDriveLink(d.contentimage));

  const { updateEduData, loading } = useUpdateEdu(d._id ?? '')

  const handleSubmit = async () => {
    try {
      await updateEduData({
        name: d.name,
        desc: d.desc,
        status: d.status,
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
            <SheetTitle>Edit Education and Publication Card Metadata</SheetTitle>
            <SheetDescription>
              Setelah anda yakin dengan perubhan klik ok dan cancle untuk mengundo semua perubahan.
            </SheetDescription>
          </SheetHeader>
          <div className='overflow-y-scroll'>
            <div className='h-[80vh] px-5 space-y-5'>
              <Field>
                <FieldLabel htmlFor="contenttitle">Education Card Name</FieldLabel>
                <Textarea
                  required
                  value={contenttitle}
                  onChange={(e) => setContenttitle(e.target.value)}
                  id="name"
                  className="resize-none"
                />

                <FieldLabel htmlFor="contentdesc">Education Card Description</FieldLabel>
                <Textarea
                  id="contentdesc"
                  required
                  className="resize-none"
                  onChange={(e) => setContentdesc(e.target.value)}
                  value={contentdesc}
                />

                <FieldLabel htmlFor="contentimage">Image Education Showase</FieldLabel>
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

export default function AdminEditEduScreen() {
  const { id } = useParams();
  if (!id) return;

  const { eduData, loading, error, message } = useFetchEduData(id);

  if (!eduData) return null

  if (loading) return <LoadContent />
  if (error) return <div>{error}{message}</div>

  return (
    <PrematureMainLayout>
      <div className="min-h-screen w-full pt-[35vw] px-10 sm:pt-[24vw] md:pt-[12vw] lg:pt-[8vw] pb-20 space-y-10">
        {/* card section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <EditMetadataEducationCard d={eduData} />
            <h1 className="text-xl">Card Overview</h1>
          </div>
          <div className="w-full flex xl:justify-between xl:items-start justify-center">
            <div className="xl:w-[50%] w-[80%] border border-gray-300 rounded-md xl:p-8 p-5">
              <EdukasiPublikasiCard imagePlaceHolder={eduData.imageplaceholder} title={eduData.name} />
            </div>
          </div>
        </div>
        {/* card section */}

        {/* content section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <EditContentEducationCard d={eduData} />
            <h1 className="text-xl">Content Overview</h1>
          </div>
          <div className="bg-white border border-gray-300 rounded-md p-8">
            <EducationCard d={eduData} />
          </div>
        </div>
        {/* content section */}

      </div>
    </PrematureMainLayout>
  );
}
