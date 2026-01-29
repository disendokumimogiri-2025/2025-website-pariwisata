import { ViewPortMode } from "./landing-page-section";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel } from "@/components/ui/field"


import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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

function ContentEditor() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Anouncement Editor</Button>
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

            {/* hero section */}
            <div>
              <Collapsible>
                <CollapsibleTrigger className='p-4 rounded-md border border-gray-200 w-full text-start font-semibold'>
                  Hero Section
                </CollapsibleTrigger>
                <CollapsibleContent className='px-2 py-3'>
                  <Field>
                    <FieldLabel htmlFor="herotitle">Hero Section Tittle</FieldLabel>
                    <Textarea
                      id="herotitle"
                      placeholder="Lumbung Mataraman Sriharjo"
                      className="resize-none"
                    />
                    <FieldLabel htmlFor="herosubtitle">Hero Section Tagline</FieldLabel>
                    <Textarea
                      id="herosubtitle"
                      placeholder="Lorem qui amet amet amet."
                    />
                    <FieldLabel htmlFor="heroabstract">Hero Section brief description</FieldLabel>
                    <Textarea
                      id="heroabstract"
                      placeholder="Lorem qui amet amet amet."
                    />
                    <FieldLabel htmlFor="heroimageplaceholder">Hero Section Background</FieldLabel>
                    <Input
                      id="heroimageplaceholder"
                      placeholder="Lumbung Mataraman Sriharjo"
                      className="resize-none"
                    />
                  </Field>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* about section */}
            <div>
              <Collapsible>
                <CollapsibleTrigger className='p-4 rounded-md border border-gray-200 w-full text-start font-semibold'>
                  About Section
                </CollapsibleTrigger>
                <CollapsibleContent className='px-2 py-3'>
                  <Field>
                    <FieldLabel htmlFor="abouttitle">About Section Tittle</FieldLabel>
                    <Textarea
                      id="abouttitle"
                      placeholder="Lumbung Mataraman Sriharjo"
                      className="resize-none"
                    />
                    <FieldLabel htmlFor="aboutabstract">About Section brief description</FieldLabel>
                    <Textarea
                      id="aboutabstract"
                      placeholder="Lorem qui amet amet amet."
                    />
                  </Field>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* wisata & kuliner section */}
            <div>
              <Collapsible>
                <CollapsibleTrigger className='p-4 rounded-md border border-gray-200 w-full text-start font-semibold'>
                  Wisata dan Kuliner Section
                </CollapsibleTrigger>
                <CollapsibleContent className='px-2 py-3'>
                  <Field>
                    <FieldLabel htmlFor="paketwisatatitle">Wisata Section Title</FieldLabel>
                    <Textarea
                      id="paketwisatatitle"
                      placeholder="Lorem qui amet amet amet."
                    />
                    <FieldLabel htmlFor="paketwisatasubtitle">Wisata Section Tagline</FieldLabel>
                    <Textarea
                      id="paketwisatasubtitle"
                      placeholder="Lorem qui amet amet amet."
                    />
                    <FieldLabel htmlFor="paketwisataabstract">Wisata Section brief description</FieldLabel>
                    <Textarea
                      id="paketwisataabstract"
                      placeholder="Lorem qui amet amet amet."
                    />
                  </Field>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* edukasi & publikasi section */}
            <div>
              <Collapsible>
                <CollapsibleTrigger className='p-4 rounded-md border border-gray-200 w-full text-start font-semibold'>
                  Edukasi dan Publikasi Section
                </CollapsibleTrigger>
                <CollapsibleContent className='px-2 py-3'>
                  <Field>
                    <FieldLabel htmlFor="educationtitle">Edukasi Section Title</FieldLabel>
                    <Textarea
                      id="educationtitle"
                      placeholder="Lorem qui amet amet amet."
                    />
                    <FieldLabel htmlFor="educationsubtitle">Edukasi Section tagline</FieldLabel>
                    <Textarea
                      id="educationsubtitle"
                      placeholder="Lorem qui amet amet amet."
                    />
                    <FieldLabel htmlFor="educationabstract">Edukasi Section brief description</FieldLabel>
                    <Textarea
                      id="educationabstract"
                      placeholder="Lorem qui amet amet amet."
                    />
                  </Field>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* souvenir section */}
            <div>
              <Collapsible>
                <CollapsibleTrigger className='p-4 rounded-md border border-gray-200 w-full text-start font-semibold'>
                  Souvenir Section
                </CollapsibleTrigger>
                <CollapsibleContent className='px-2 py-3'>
                  <Field>
                    <FieldLabel htmlFor="souvenirtitle">Souvenir Section Title</FieldLabel>
                    <Textarea
                      id="souvenirtitle"
                      placeholder="Lorem qui amet amet amet."
                    />
                    <FieldLabel htmlFor="souvenirsubtitle">Souvenir Section brief Tagline</FieldLabel>
                    <Textarea
                      id="souvenirsubtitle"
                      placeholder="Lorem qui amet amet amet."
                    />
                    <FieldLabel htmlFor="souvenirabstract">Souvenir Section brief description</FieldLabel>
                    <Textarea
                      id="souvenirabstract"
                      placeholder="Lorem qui amet amet amet."
                    />
                  </Field>
                </CollapsibleContent>
              </Collapsible>
            </div>

          </div>
        </div>
        <SheetFooter>
          <Button type="submit">OK</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancle</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default function AnnouncementSection() {
  return (
    <div className='w-full p-10'>
      <div className='flex w-full items-end justify-between'>
        <div>
          <ContentEditor />
        </div>
        <div className=''>
          <ViewPortMode />
        </div>
      </div>
    </div>
  );
}
