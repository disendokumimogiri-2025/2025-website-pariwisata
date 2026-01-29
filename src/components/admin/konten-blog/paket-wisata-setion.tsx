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
import type { BlogData } from "@/types/data-types";
import { useDeleteData, useUpdateBlog } from "@/hooks/connection-hook/admin-connection";

// same in the kuliner-section.ts
function UpdateStatus({ data }: { data: BlogData }) {
  const { updateBlogData, message } = useUpdateBlog(data._id ?? '');
  const { setFlag, flag } = React.useContext(AdminCreateEditContext)

  const handleupdate = async () => {
    try {
      await updateBlogData({
        name: data.name,
        desc: data.desc,
        status: data.status === 0 ? 1 : 0,
        price: data.price,
        prior: data.prior,
        imageplaceholder: data.imageplaceholder,
        blogtitle: data.blogtitle,
        blogabstract: data.blogabstract,
        blogcover: data.blogcover,
        isClinary: data.isClinary,
        contents: data.contents,
      })
      setFlag(!flag);
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
  const { message, deleteData } = useDeleteData("blog", id);
  const { setFlag, flag } = React.useContext(AdminCreateEditContext)

  const handledelete = async () => {
    try {
      await deleteData();
      setFlag(!flag);
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

export default function PaketWisataSection() {
  const usenavigate = useNavigate();

  const { blogapidatas } = React.useContext(AdminCreateEditContext)

  return (
    <div className="w-full h-full py-20 px-10 flex justify-center items-start">
      <Table>
        <TableCaption>List Konten atau Blog Paket Wisata</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">Link</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead>Judul</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogapidatas?.filter(i => i.isClinary === 0).map((blog, idx) => (
            <TableRow key={idx}>
              <TableCell onClick={() => usenavigate(`/blog/${blog._id}`)} className="hover:underline font-medium cursor-pointer">Direct Link</TableCell>
              <TableCell>{blog.price}</TableCell>
              <TableCell>{blog.blogtitle}</TableCell>
              <TableCell>{blog.status === 1 ? 'Published' : 'Unpublished'}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontalIcon />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => usenavigate(`/admin/blog/edit/${blog._id}`)}>Edit</DropdownMenuItem>
                    <DropdownMenuItem>
                      <UpdateStatus data={blog} />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <DeleteData id={blog._id ?? ''} />
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
