import { ChipThemed } from "@/components/ComponentThemes";



export default function ChipStyle() {
  return (
    <div>
      <div className="bg-background-1 p-5 rounded-lg text-center ">
        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mb-5">Chips</p>
        <div className="flex xl:justify-around gap-4 flex-wrap">

        <ChipThemed color="solid" variant="solid">Solid</ChipThemed>
        <ChipThemed color="bordered" variant="bordered">Bordered</ChipThemed>
        <ChipThemed color="light" variant="light">Light</ChipThemed>
        <ChipThemed color="flat" variant="flat">Flat</ChipThemed>
        <ChipThemed color="faded" variant="faded">Faded</ChipThemed>
        <ChipThemed color="shadow" variant="shadow">Shadow</ChipThemed>
          
        </div>
      </div>
    </div>
  )
}
