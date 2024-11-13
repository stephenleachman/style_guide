
// Background Colors
const BackgroundColors = [
  { id: 1,
    color: "#030712", 
    theme: "Dark:",
    style: "Background 1",
  },
  { id: 2,
    color: "#111827", 
    theme: "Dark:",
    style: "Background 2",
  },
  { id: 3,
    color: "#f9fafb", 
    theme: "Light:",
    style: "Background 1",
  },
  { id: 4,
    color: "#f3f4f6", 
    theme: "Light:",
    style: "Background 2",
  },
  { id: 5,
    color: "#111827", 
    theme: "Dark:",
    style: "Card bg",
  },
  { id: 6,
    color: "#f9fafb", 
    theme: "Light:",
    style: "Card bg",
  },
];

// Font Colors
const FontColors = [
  { id: 1,
    color: "#d1d5db", 
    theme: "Dark:",
    style: "Heading",
  },
  { id: 2,
    color: "#111827", 
    theme: "Light:",
    style: "Heading",
  },
  { id: 3,
    color: "#9ca3af", 
    theme: "Dark:",
    style: "Paragraph",
  },
  { id: 4,
    color: "#374151", 
    theme: "Light:",
    style: "Paragraph",
  },
  { id: 5,
    color: "#4b5563", 
    theme: "Dark:",
    style: "Muted",
  },
  { id: 6,
    color: "#6b7280", 
    theme: "Light:",
    style: "Muted",
  },
  { id: 7,
    color: "#d4d4d4", 
    theme: "Dark:",
    style: "Links",
  },
  { id: 8,
    color: "#374151", 
    theme: "Light:",
    style: "Links",
  },
];

// Borders And Rings Colors
const BordersAndRings = [
  { id: 1,
    color: "#1f2937", 
    theme: "Dark:",
    style: "Border",
  },
  { id: 2,
    color: "#cbd5e1", 
    theme: "Light:",
    style: "Border",
  },
  { id: 3,
    color: "#1f2937", 
    theme: "Dark:",
    style: "Ring",
  },
  { id: 4,
    color: "#cbd5e1", 
    theme: "Light:",
    style: "Ring",
  },
];

// Primary Colors
const PrimaryColors = [
  { id: 1,
    color: "#a21caf", 
    style: "Background 1",
  },
  { id: 2,
    color: "#7e22ce", 
    style: "Primary 2",
  },
];

// Secondary Colors
const SecondaryColors = [
  { id: 1,
    color: "#701a75", 
    style: "Secondary 1",
  },
  { id: 2,
    color: "#581c87", 
    style: "Secondary 2",
  },
];

// Secondary Colors
const OtherColors = [
  { id: 1,
    color: "#17c964", 
    style: "Success",
  },
  { id: 2,
    color: "#f5a524", 
    style: "Warning",
  },
  { id: 3,
    color: "#f31260", 
    style: "Danger",
  },
];


export default function Colors() {
  return (
    <>
      <div className="bg-background-1 p-5 rounded-lg text-center ">
        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mb-5">Background Colors</p>
        <ul className="grid grid-cols-2 xl:grid-cols-3 gap-5">
          {BackgroundColors.map((color) => (
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
        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mb-5 mt-10">Font Colors</p>
        <ul className="grid grid-cols-2 xl:grid-cols-3 gap-5">
          {FontColors.map((color) => (
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
        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mb-5 mt-10">Borders And Rings</p>
        <ul className="grid grid-cols-2 xl:grid-cols-3 gap-5">
          {BordersAndRings.map((color) => (
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
        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mb-5 mt-10">Secondary Colors</p>
        <ul className="grid grid-cols-2 xl:grid-cols-3 gap-5">
          {SecondaryColors.map((color) => (
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
