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
import { getDriveId, getRenderableDriveLink } from "@/helper/drive-helper";

import React from "react";
import { useCreateGallery, useDeleteData } from "@/hooks/connection-hook/admin-connection";
import { AdminCreateEditContext } from "@/context-provider/context-provider-type";
import { ReduceChar } from "@/helper/word-reducer";

function AddGalleryItem() {
    const [order, setOrder] = React.useState(0);

    const { setFlag, flag } = React.useContext(AdminCreateEditContext)


    const [gallerytitle, setGallerytitle] = React.useState("");
    const [gallerydesc, setGallerydesc] = React.useState("");
    const [galleryimage, setGalleryimage] = React.useState("");

    const { createGallery, message, loading, error } = useCreateGallery();

    const handlesubmit = async () => {
        try {
            await createGallery({
                order: order,
                status: 0,
                gallerytitle: gallerytitle,
                gallerydesc: gallerydesc,
                galleryimage: getDriveId(galleryimage),
            })
            console.log(error)
            setFlag(!flag);
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) return <div>{message}</div>

    return (
        <Dialog>
            <DialogTrigger>Tambah Gallery</DialogTrigger>

            <DialogContent className="md:min-w-[50vw] min-w-[80vw]">
                <DialogHeader>
                    <DialogTitle className="wrap-break-word">
                        Tambah Gallery
                    </DialogTitle>
                    <DialogDescription className="text-sm">
                        Pastikan Ketika anda menambahkan gallery sudah sesuai dengan ketentuan yang berlaku dan tidak melanggar hukum apapun.
                    </DialogDescription>
                </DialogHeader>

                <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
                    <div className="space-y-5">
                        <Field>
                            <FieldLabel htmlFor="gallerytitle">Gallery Name</FieldLabel>
                            <Input
                                id="gallerytitle"
                                required
                                value={gallerytitle}
                                onChange={(e) => setGallerytitle(e.target.value)}
                            />

                            <FieldLabel htmlFor="gallerydesc">Gallery Abstract</FieldLabel>
                            <Textarea
                                id="gallerydesc"
                                required
                                value={gallerydesc}
                                onChange={(e) => setGallerydesc(e.target.value)}
                            />

                            <FieldLabel htmlFor="order">Gallery order</FieldLabel>
                            <Input
                                id="price"
                                required
                                value={order}
                                onChange={(e) => setOrder(Number(e.target.value))}
                            />

                            <FieldLabel htmlFor="galleryimage">Gallery Content Image</FieldLabel>
                            <Input
                                id="galleryimage"
                                required
                                value={galleryimage}
                                onChange={(e) => setGalleryimage(e.target.value)}
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
    const { message, deleteData } = useDeleteData("gallery", id);

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

export default function GallerySection() {
    const { galleyapidata } = React.useContext(AdminCreateEditContext)
    
    return (
        <div className="w-full h-full py-20 px-10 flex flex-col justify-start items-end gap-10">
            <div className="w-full flex justify-end">
                <div className="p-2 text-white bg-black rounded-md">
                    <AddGalleryItem />
                </div>
            </div>
            <Table>
                <TableCaption>List Gallery View</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-25">Order</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Image Link</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {galleyapidata?.map((gallery, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{gallery.order}</TableCell>
                            <TableCell>{gallery.status === 1 ? 'Published' : 'Unpublished'}</TableCell>
                            <TableCell>{ReduceChar(gallery.gallerytitle)}</TableCell>
                            <TableCell>{ReduceChar(gallery.galleryimage)}</TableCell>
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="size-8">
                                            <MoreHorizontalIcon />
                                            <span className="sr-only">Open menu</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(getRenderableDriveLink(gallery.galleryimage))}>Copy Link</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <DeleteData id={gallery._id ?? ''} />
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
