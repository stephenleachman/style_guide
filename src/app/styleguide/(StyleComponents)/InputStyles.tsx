
import {Input} from "@nextui-org/react";


export default function ButtonStyles() {
  return (
    <div>
      <div className="bg-background-1 p-5 rounded-lg text-center ">
        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mb-5">Inputs</p>
        <div className="flex xl:justify-around  flex-wrap">

            <div className="flex w-full flex-wrap gap-4 mb-5">

                <Input 
                    className="input standard sm:w-[300px]" 
                    type="email"  
                    label="Email" 
                    />

                <Input 
                    className="input standard sm:w-[300px]" 
                    type="email" 
                    label="Email" 
                    placeholder="Enter your email" 
                    />

                <Input 
                    className="input bordered sm:w-[300px]" 
                    type="email"  
                    variant="bordered" 
                    label="Email" 
                    // color="primary"
                    />

                <Input 
                    id="underlined"
                    className="input underlined sm:w-[300px]" 
                    type="email" 
                    variant="underlined" 
                    label="Email" 
                    radius="none"
                    // isRequired={true}
                    color="primary"
                    />

                <Input 
                    className="input faded sm:w-[300px]" 
                    type="email"  
                    variant="faded" 
                    label="Email" 
                    />
            </div>

        </div>
      </div>
    </div>
  )
}
