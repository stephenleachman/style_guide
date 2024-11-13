import { DarkColors, LightColors, OtherColors, PrimaryColors, } from "./ColorCods";



export default function Colors() {
  return (
    <>
      <div className="bg-background-1 p-5 rounded-lg text-center ">
        
        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mb-5">Dark Theme</p>
        <ul className="grid grid-cols-2 xl:grid-cols-3 gap-5">
          {DarkColors.map((color) => (
            <li key={color.id} className="card ring-1 ring-ring-color rounded-lg overflow-hidden">
              <div style={{ backgroundColor: color.color }} className="h-[80px] w-full ring-1 ring-ring-color"></div>
              <div className="p-2">
                <p className="text-muted-text text-left text-sm">{color.theme}</p>
                <p className="text-heading-text text-left text-sm mt-1">{color.style}</p>
                <p className="text-heading-text text-left text-sm mt-1 font-medium tracking-wide">{color.color}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mb-5 mt-10">Light Theme</p>
        <ul className="grid grid-cols-2 xl:grid-cols-3 gap-5">
          {LightColors.map((color) => (
            <li key={color.id} className="card ring-1 ring-ring-color rounded-lg overflow-hidden">
              <div style={{ backgroundColor: color.color }} className="h-[80px] w-full ring-1 ring-ring-color"></div>
              <div className="p-2">
                <p className="text-muted-text text-left text-sm">{color.theme} </p>
                <p className="text-heading-text text-left text-sm mt-1">{color.style}</p>
                <p className="text-heading-text text-left text-sm mt-1 font-medium tracking-wide">{color.color}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mb-5 mt-10">Primary Colors</p>
        <ul className="grid grid-cols-2 xl:grid-cols-3 gap-5">
          {PrimaryColors.map((color) => (
            <li key={color.id} className="card ring-1 ring-ring-color rounded-lg overflow-hidden">
              <div style={{ backgroundColor: color.color }} className="h-[80px] w-full ring-1 ring-ring-color"></div>
              <div className="p-2">
                {/* <p className="text-muted-text text-left text-sm">{color.theme} </p> */}
                <p className="text-heading-text text-left text-sm mt-1">{color.style}</p>
                <p className="text-heading-text text-left text-sm mt-1 font-medium tracking-wide">{color.color}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mb-5 mt-10">Other Colors</p>
        <ul className="grid grid-cols-2 xl:grid-cols-3 gap-5">
          {OtherColors.map((color) => (
            <li key={color.id} className="card ring-1 ring-ring-color rounded-lg overflow-hidden">
              <div style={{ backgroundColor: color.color }} className="h-[80px] w-full ring-1 ring-ring-color"></div>
              <div className="p-2">
                {/* <p className="text-muted-text text-left text-sm">{color.theme} </p> */}
                <p className="text-heading-text text-left text-sm mt-1">{color.style}</p>
                <p className="text-heading-text text-left text-sm mt-1 font-medium tracking-wide">{color.color}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
