import React from "react"
import { ViewPortMode } from "./landing-page-section"

import { Button } from "@/components/ui/button"
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
import { AdminCreateEditContext } from "@/context-provider/context-provider-type"


type TermsComponentProps = {
  value: string
  onChange: (val: string) => void
  onDelete: () => void
}

function TermsComponent({ value, onChange, onDelete }: TermsComponentProps) {
  return (
    <div className="space-y-3">
      <FieldLabel>Term Content</FieldLabel>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Lumbung Mataraman Sriharjo"
        className="resize-none"
      />
      <div className="flex gap-3">
        <Button size="sm">OK</Button>
        <Button size="sm" variant="destructive" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  )
}


type ContentEditorProps = {
  privacypolicytitle: string
  privacypolicysubtitle: string
  setPrivacypolicytitle: (v: string) => void
  setPrivacypolicysubtitle: (v: string) => void

  termcondition: string[]
  setTermcondition: React.Dispatch<React.SetStateAction<string[]>>
}

function ContentEditor({
  privacypolicytitle,
  privacypolicysubtitle,
  setPrivacypolicytitle,
  setPrivacypolicysubtitle,
  termcondition,
  setTermcondition,
}: ContentEditorProps) {
  const addTerm = () => {
    setTermcondition((prev) => [...prev, ""])
  }

  const updateTerm = (index: number, value: string) => {
    setTermcondition((prev) =>
      prev.map((t, i) => (i === index ? value : t))
    )
  }

  const deleteTerm = (index: number) => {
    setTermcondition((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Privacy Policy Editor</Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Landing Page Konten</SheetTitle>
          <SheetDescription>
            Setelah yakin klik OK, Cancel untuk membatalkan perubahan.
          </SheetDescription>
        </SheetHeader>

        <div className="overflow-y-scroll">
          <div className="h-[80vh] px-5 space-y-5">

            {/* PRIVACY POLICY */}
            <Collapsible>
              <CollapsibleTrigger className="p-4 rounded-md border w-full text-start font-semibold">
                Privacy Policy Content
              </CollapsibleTrigger>

              <CollapsibleContent className="px-2 py-3">
                <Field>
                  <FieldLabel>Title</FieldLabel>
                  <Textarea
                    value={privacypolicytitle}
                    onChange={(e) => setPrivacypolicytitle(e.target.value)}
                    placeholder="Privacy Policy Title"
                  />

                  <FieldLabel>Abstract</FieldLabel>
                  <Textarea
                    value={privacypolicysubtitle}
                    onChange={(e) => setPrivacypolicysubtitle(e.target.value)}
                    placeholder="Lorem ipsum dolor sit amet."
                  />
                </Field>
              </CollapsibleContent>
            </Collapsible>

            {/* TERMS */}
            <Collapsible>
              <CollapsibleTrigger className="p-4 rounded-md border w-full text-start font-semibold">
                Terms
              </CollapsibleTrigger>

              <CollapsibleContent className="px-2 py-3 space-y-4">
                {termcondition.map((term, i) => (
                  <TermsComponent
                    key={i}
                    value={term}
                    onChange={(val) => updateTerm(i, val)}
                    onDelete={() => deleteTerm(i)}
                  />
                ))}

                <Button variant="outline" onClick={addTerm}>
                  + Add Terms
                </Button>
              </CollapsibleContent>
            </Collapsible>

          </div>
        </div>

        <SheetFooter>
          <Button type="submit">OK</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}


export default function PrivacyPolicySection() {
  const { pageapidata } = React.useContext(AdminCreateEditContext);

  const [privacypolicytitle, setPrivacypolicytitle] = React.useState(pageapidata?.privacypolicytitle)
  const [privacypolicysubtitle, setPrivacypolicysubtitle] = React.useState(pageapidata?.herosubtitle)
  const [termcondition, setTermcondition] = React.useState<string[]>(pageapidata?.termcondition ?? [])

  return (
    <div className="w-full p-10">
      <div className="flex w-full items-end justify-between">
        <div>
          <ContentEditor
            privacypolicytitle={privacypolicytitle ?? ''}
            privacypolicysubtitle={privacypolicysubtitle ?? ''}
            setPrivacypolicytitle={setPrivacypolicytitle}
            setPrivacypolicysubtitle={setPrivacypolicysubtitle}
            termcondition={termcondition}
            setTermcondition={setTermcondition}
          />
        </div>
        <div>
          <ViewPortMode />
        </div>
      </div>
    </div>
  )
}
