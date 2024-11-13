import { ButtonThemed } from "@/components/ComponentThemes"

export default function ButtonStyles() {
  return (
    <div>
      <div className="bg-background-1 p-5 rounded-lg text-center ">
        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1">Buttons</p>
        <div className="flex xl:justify-around  flex-wrap">

          <ButtonThemed 
            color="gradiant"
            className="mr-5 mt-5"
            >
            Click Me!
          </ButtonThemed>

          <ButtonThemed 
            color="bordered"
            className="mr-5 mt-5"
            >  
            Click Me!
          </ButtonThemed>

          <ButtonThemed 
            color="gradiant"
            shadow="primary"
            className="mr-5 mt-5"
            >
            Click Me!
          </ButtonThemed>

          <ButtonThemed 
            color="primary"
            className="mr-5 mt-5"
            >
            Click Me!
          </ButtonThemed>
          
        </div>
      </div>
    </div>
  )
}
