import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { AdminCreateEditContext } from "@/context-provider/context-provider-type";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Textarea } from "@/components/ui/textarea";
import { useCreateEducation, useDeleteData, useUpdateEdu } from "@/hooks/connection-hook/admin-connection";
import { getDriveId } from "@/helper/drive-helper";
import type { EducationData } from "@/types/data-types";
import LoadContent from "../load-content";

function UpdateStatus({ data }: { data: EducationData }) {
  const { updateEduData, message } = useUpdateEdu(data._id ?? '');

  const handleupdate = async () => {
    try {
      await updateEduData({
        name: data.name,
        desc: data.desc,
        status: data.status === 0 ? 1 : 0,
        imageplaceholder: data.imageplaceholder,
        contenttitle: data.contenttitle,
        contentdesc: data.contentdesc,
        contentimage: data.contentimage,
      })
    } catch (error) {
      console.log(error)
      console.log(message)
    }
  }

  return (
    <div
      onClick={() => { handleupdate() }}
    >
      {data.status === 0 ? 'Publish' : 'Take Down'}
    </div>
  )
}

function DeleteData({ id }: { id: string }) {
  const { message, deleteData } = useDeleteData("edu", id);

  const handledelete = async () => {
    try {
      await deleteData();
    } catch (error) {
      console.log(error)
      console.log(message)
    }
  }
  return (
    <div
      onClick={() => { handledelete() }}
    >
      Delete
    </div>
  )
}

function AddEducationItem() {
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [imagePlaceholder, setImagePlaceholder] = React.useState("");

  const [contentTitle, setContentTitle] = React.useState("");
  const [contentDesc, setContentDesc] = React.useState("");
  const [contentImage, setContentImage] = React.useState("");

  const { flag, setFlag } = React.useContext(AdminCreateEditContext)

  const { createEduData, message, loading, error } = useCreateEducation();

  const handlesubmit = async () => {
    try {
      await createEduData({
        name: name,
        desc: desc,
        status: 0,
        imageplaceholder: getDriveId(imagePlaceholder),
        contenttitle: contentTitle,
        contentdesc: contentDesc,
        contentimage: getDriveId(contentImage),
      })
      setFlag(flag)
      console.log(message, error)
    } catch (error) {
      console.log(error)
    }
  }

  if (loading) return <LoadContent />

  return (
    <Dialog>
      <DialogTrigger>Tambah Item</DialogTrigger>

      <DialogContent className="md:min-w-[50vw] min-w-[80vw]">
        <DialogHeader>
          <DialogTitle className="wrap-break-word">
            Tambah Publikasi
          </DialogTitle>
          <DialogDescription className="text-sm">
            Tambahkan Sebuah Publikasi Tentang Riset Di Lumbung Mataraman
          </DialogDescription>
        </DialogHeader>

        <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
          <div className="space-y-5">
            <Collapsible>
              <CollapsibleTrigger className="p-4 rounded-md border border-gray-200 w-full text-start font-semibold">
                Metadata Untuk Card
              </CollapsibleTrigger>

              <CollapsibleContent className="px-2 py-3 space-y-3">
                <Field>
                  <FieldLabel htmlFor="name">Education Name</FieldLabel>
                  <Input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <FieldLabel htmlFor="desc">Education Abstract</FieldLabel>
                  <Textarea
                    id="desc"
                    required
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />

                  <FieldLabel htmlFor="imageplaceholder">
                    Image Placeholder
                  </FieldLabel>
                  <Input
                    id="imageplaceholder"
                    required
                    value={imagePlaceholder}
                    onChange={(e) => setImagePlaceholder(e.target.value)}
                  />
                </Field>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="p-4 rounded-md border border-gray-200 w-full text-start font-semibold">
                Konten dalam page
              </CollapsibleTrigger>

              <CollapsibleContent className="px-2 py-3 space-y-3">
                <Field>
                  <FieldLabel htmlFor="contenttitle">
                    Education Content Title
                  </FieldLabel>
                  <Input
                    id="contenttitle"
                    required
                    value={contentTitle}
                    onChange={(e) => setContentTitle(e.target.value)}
                  />

                  <FieldLabel htmlFor="contentdesc">
                    Education Content Abstract
                  </FieldLabel>
                  <Textarea
                    id="contentdesc"
                    required
                    value={contentDesc}
                    onChange={(e) => setContentDesc(e.target.value)}
                  />

                  <FieldLabel htmlFor="contentimage">
                    Education Content Image
                  </FieldLabel>
                  <Input
                    id="contentimage"
                    required
                    value={contentImage}
                    onChange={(e) => setContentImage(e.target.value)}
                  />
                </Field>
              </CollapsibleContent>
            </Collapsible>

            <Button type="submit" variant={"outline"} onClick={() => {
              handlesubmit();
            }}>
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


export default function EdukasiSection() {
  const usenavigate = useNavigate()
  const { eduapidataa } = React.useContext(AdminCreateEditContext)

  return (
    <div className="w-full h-full py-20 px-10 flex flex-col justify-start items-start gap-10">
      <div className="w-full flex justify-between">
        <Button onClick={() => usenavigate('/edu')} variant={"ghost"}>Menuju Halaman</Button>
        <div className="p-2 text-white bg-black rounded-md">
          <AddEducationItem />
        </div>
      </div>
      <Table>
        <TableCaption>List Konten atau Blog Edukasi</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Judul</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eduapidataa?.map((edu, idx) => (
            <TableRow key={idx}>
              <TableCell>{edu.name}</TableCell>
              <TableCell>{edu.status === 0 ? 'Unpublihsed' : 'Published'}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontalIcon />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => usenavigate(`/admin/edu/edit/${edu._id}`)}>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <UpdateStatus data={edu} />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <DeleteData id={edu._id ?? ''} />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
