import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Smartphone, Tablet, MonitorSmartphone } from 'lucide-react'

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
import React from 'react'
import { AdminCreateEditContext } from '@/context-provider/context-provider-type'
import type { InternalWebsitePageData } from '@/types/data-types'
import { useUpdatePagesCOntent } from '@/hooks/connection-hook/admin-connection'
import { getDriveId, getRenderableDriveLink } from '@/helper/drive-helper'


const tabs = [
  {
    name: 'desktop',
    value: 'Desktop View',
    icon: MonitorSmartphone,
  },
  {
    name: 'tab',
    value: 'Tablet View',
    icon: Tablet,
  },
  {
    name: 'mobile',
    value: 'Mobile View',
    icon: Smartphone,
  },
]

export function ViewPortMode() {
  return (
    <div className='w-full max-w-md'>
      <Tabs defaultValue='desktop' className='gap-4'>
        <TabsList className='h-full'>
          {tabs.map(({ icon: Icon, name, value }) => (
            <Tooltip key={value}>
              <TooltipTrigger asChild>
                <span>
                  <TabsTrigger
                    value={value}
                    className='flex flex-col items-center gap-1 px-2.5 sm:px-3'
                    aria-label='tab-trigger'
                  >
                    <Icon />
                  </TabsTrigger>
                </span>
              </TooltipTrigger>
              <TooltipContent className='px-2 py-1 text-xs'>{name}</TooltipContent>
            </Tooltip>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}

function ContentEditor({ data }: { data: InternalWebsitePageData }) {
  // HERO
  const [heroTitle, setHeroTitle] = React.useState(data.herotitle);
  const [heroSubtitle, setHeroSubtitle] = React.useState(data.herosubtitle);
  const [heroAbstract, setHeroAbstract] = React.useState(data.heroabstract);
  const [heroImagePlaceholder, setHeroImagePlaceholder] = React.useState(getRenderableDriveLink(data.heroimageplaceholder));

  // ABOUT
  const [aboutTitle, setAboutTitle] = React.useState(data.abouttitle);
  const [aboutAbstract, setAboutAbstract] = React.useState(data.aboutabstract);

  // WISATA
  const [paketWisataTitle, setPaketWisataTitle] = React.useState(data.paketwisatatitle);
  const [paketWisataSubtitle, setPaketWisataSubtitle] = React.useState(data.paketwisatasubtitle);
  const [paketWisataAbstract, setPaketWisataAbstract] = React.useState(data.paketwisataabstract);

  // EDUKASI
  const [educationTitle, setEducationTitle] = React.useState(data.educationsubtitle);
  const [educationSubtitle, setEducationSubtitle] = React.useState(data.educationsubtitle);
  const [educationAbstract, setEducationAbstract] = React.useState(data.educationabstract);

  // SOUVENIR
  const [souvenirTitle, setSouvenirTitle] = React.useState(data.souvenirsubtitle);
  const [souvenirSubtitle, setSouvenirSubtitle] = React.useState(data.souvenirsubtitle);
  const [souvenirAbstract, setSouvenirAbstract] = React.useState(data.souvenirabstract);

  const { updateInternalwebdata, message, error, loading } = useUpdatePagesCOntent<InternalWebsitePageData, InternalWebsitePageData>(data._id ?? '');

  const handleSubmit = async () => {
    if (!updateInternalwebdata || !data || !heroImagePlaceholder || !educationTitle || !souvenirTitle) return;
    try {
      await updateInternalwebdata({
        aboutabstract: aboutAbstract,
        abouttitle: aboutTitle,
        educationabstract: educationAbstract,
        educationsubtitle: educationSubtitle,
        educationtitle: educationTitle,
        herotitle: heroTitle,
        herosubtitle: heroSubtitle,
        heroabstract: heroAbstract,
        heroimageplaceholder: getDriveId(heroImagePlaceholder),
        paketwisataabstract: paketWisataAbstract,
        paketwisatasubtitle: paketWisataSubtitle,
        paketwisatatitle: paketWisataTitle,
        souvenirabstract: souvenirAbstract,
        souvenirsubtitle: souvenirSubtitle,
        souvenirtitle: souvenirTitle,
        privacypolicytitle: data.privacypolicytitle,
        privacypolicysubtitle: data.privacypolicysubtitle,
        termcondition: data.termcondition
      })
    } catch { console.log(error, message) }
  }

  if (loading) return <div>loading</div>


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Content Editor</Button>
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
                      value={heroTitle}
                      onChange={(e) => setHeroTitle(e.target.value)}
                      placeholder="Lumbung Mataraman Sriharjo"
                    />
                    <FieldLabel htmlFor="herosubtitle">Hero Section Tagline</FieldLabel>
                    <Textarea
                      id="herosubtitle"
                      value={heroSubtitle}
                      onChange={(e) => setHeroSubtitle(e.target.value)}
                    />
                    <FieldLabel htmlFor="heroabstract">Hero Section brief description</FieldLabel>
                    <Textarea
                      id="heroabstract"
                      value={heroAbstract}
                      onChange={(e) => setHeroAbstract(e.target.value)}
                    />
                    <FieldLabel htmlFor="heroimageplaceholder">Hero Section Background</FieldLabel>
                    <Input
                      id="heroimageplaceholder"
                      value={heroImagePlaceholder}
                      className='resize-none'
                      onChange={(e) => setHeroImagePlaceholder(e.target.value)}
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
                      value={aboutTitle}
                      onChange={(e) => setAboutTitle(e.target.value)}
                      className='resize-none'
                    />
                    <FieldLabel htmlFor="aboutabstract">About Section brief description</FieldLabel>
                    <Textarea
                      id="aboutabstract"
                      value={aboutAbstract}
                      onChange={(e) => setAboutAbstract(e.target.value)}
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
                      value={paketWisataTitle}
                      onChange={(e) => setPaketWisataTitle(e.target.value)}
                    />
                    <FieldLabel htmlFor="paketwisatasubtitle">Wisata Section Tagline</FieldLabel>
                    <Textarea
                      id="paketwisatasubtitle"
                      value={paketWisataSubtitle}
                      onChange={(e) => setPaketWisataSubtitle(e.target.value)}
                    />
                    <FieldLabel htmlFor="paketwisataabstract">Wisata Section brief description</FieldLabel>
                    <Textarea
                      id="paketwisataabstract"
                      value={paketWisataAbstract}
                      onChange={(e) => setPaketWisataAbstract(e.target.value)}
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
                      value={educationTitle}
                      onChange={(e) => setEducationTitle(e.target.value)}
                    />
                    <FieldLabel htmlFor="educationsubtitle">Edukasi Section tagline</FieldLabel>
                    <Textarea
                      id="educationsubtitle"
                      value={educationSubtitle}
                      onChange={(e) => setEducationSubtitle(e.target.value)}
                    />

                    <FieldLabel htmlFor="educationabstract">Edukasi Section brief description</FieldLabel>
                    <Textarea
                      id="educationabstract"
                      value={educationAbstract}
                      onChange={(e) => setEducationAbstract(e.target.value)}
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
                      value={souvenirTitle}
                      onChange={(e) => setSouvenirTitle(e.target.value)}
                    />
                    <FieldLabel htmlFor="souvenirsubtitle">Souvenir Section brief Tagline</FieldLabel>
                    <Textarea
                      id="souvenirsubtitle"
                      value={souvenirSubtitle}
                      onChange={(e) => setSouvenirSubtitle(e.target.value)}
                    />
                    <FieldLabel htmlFor="souvenirabstract">Souvenir Section brief description</FieldLabel>
                    <Textarea
                      id="souvenirabstract"
                      value={souvenirAbstract}
                      onChange={(e) => setSouvenirAbstract(e.target.value)}
                    />
                  </Field>
                </CollapsibleContent>
              </Collapsible>
            </div>

          </div>
        </div>
        <SheetFooter>
          <Button type="submit" onClick={() => handleSubmit()}>OK</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancle</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default function LandingPageSection() {
  const { pageapidata } = React.useContext(AdminCreateEditContext);

  console.log(pageapidata)

  if (!pageapidata) return

  return (
    <div className='w-full p-10'>
      <div className='flex w-full items-end justify-between'>
        <div>
          <ContentEditor data={pageapidata} />
        </div> 
      </div>
    </div>
  );
}
