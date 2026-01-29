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

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { getDriveId } from "@/helper/drive-helper";
import { useCreateSouvenir, useDeleteData } from "@/hooks/connection-hook/admin-connection";

function AddSouvenirItem() {
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [stock, setStock] = React.useState(0);
  const [imagePlaceholder, setImagePlaceholder] = React.useState("");

  const [contentTitle, setContentTitle] = React.useState("");
  const [contentDesc, setContentDesc] = React.useState("");
  const [contentImage, setContentImage] = React.useState("");

  const { createSouvenir, message, loading, error } = useCreateSouvenir();
  const { setFlag, flag } = React.useContext(AdminCreateEditContext)

  const handlesubmit = async () => {
    try {
      await createSouvenir({
        name: name,
        desc: desc,
        stock: stock,
        price: price,
        imageplaceholder: getDriveId(imagePlaceholder),
        contenttitle: contentTitle,
        contentdesc: contentDesc,
        contentimage: getDriveId(contentImage),
      })
      console.log(message, error)
      setFlag(!flag);
    } catch (error) {
      console.log(error)
    }
  }

  if (loading) return <div>{message}</div>

  return (
    <Dialog>
      <DialogTrigger>Tambah Item</DialogTrigger>

      <DialogContent className="md:min-w-[50vw] min-w-[80vw]">
        <DialogHeader>
          <DialogTitle className="wrap-break-word">
            Tambah Souvenir
          </DialogTitle>
          <DialogDescription className="text-sm">
            Tambahkan Souvenir yang ingin dijualkan
          </DialogDescription>
        </DialogHeader>

        <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
          <div className="space-y-5">
            <Field>
              <FieldLabel htmlFor="name">Souvenir Name</FieldLabel>
              <Input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <FieldLabel htmlFor="desc">Souvenir Abstract</FieldLabel>
              <Textarea
                id="desc"
                required
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />

              <FieldLabel htmlFor="price">Souvenir Price</FieldLabel>
              <Input
                id="price"
                required
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />

              <FieldLabel htmlFor="stock">Souvenir Stock</FieldLabel>
              <Input
                id="stock"
                required
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />

              <FieldLabel htmlFor="imageplaceholder">Souvenir Image Placeholder</FieldLabel>
              <Input
                id="imageplaceholder"
                required
                value={imagePlaceholder}
                onChange={(e) => setImagePlaceholder(e.target.value)}
              />

              <FieldLabel htmlFor="contenttitle">Souvenir Content Title</FieldLabel>
              <Input
                id="contenttitle"
                required
                value={contentTitle}
                onChange={(e) => setContentTitle(e.target.value)}
              />

              <FieldLabel htmlFor="contentdesc">Souvenir Content Abstract</FieldLabel>
              <Textarea
                id="contentdesc"
                required
                value={contentDesc}
                onChange={(e) => setContentDesc(e.target.value)}
              />

              <FieldLabel htmlFor="contentimage">Souvenir Content Image</FieldLabel>
              <Input
                id="contentimage"
                required
                value={contentImage}
                onChange={(e) => setContentImage(e.target.value)}
              />

            </Field>

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

function DeleteData({ id }: { id: string }) {
  const { message, deleteData } = useDeleteData("souvenir", id);
  const { setFlag, flag } = React.useContext(AdminCreateEditContext)

  const handledelete = async () => {
    try {
      await deleteData();
    } catch (error) {
      console.log(error)
      console.log(message)
    } finally {
      setFlag(!flag);
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

export default function SouvenirSection() {
  const usenavigate = useNavigate();
  const { souvenirapidata } = React.useContext(AdminCreateEditContext);

  return (
    <div className="w-full h-full py-20 px-10 flex flex-col justify-start items-start gap-10">
      <div className="w-full flex justify-between">
        <Button onClick={() => usenavigate('/edu')} variant={"ghost"}>Menuju Halaman</Button>
        <div className="p-2 text-white bg-black rounded-md">
          <AddSouvenirItem />
        </div>
      </div>
      <Table>
        <TableCaption>List Souvenir</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Stock</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead>Produk</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {souvenirapidata?.map((souvenir, idx) => (
            <TableRow key={idx}>
              <TableCell>{souvenir.stock}</TableCell>
              <TableCell>{souvenir.price}</TableCell>
              <TableCell>{souvenir.name}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontalIcon />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => usenavigate(`/admin/souvenir/edit/${souvenir._id}`)}>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <DeleteData id={souvenir._id ?? ''} />
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
