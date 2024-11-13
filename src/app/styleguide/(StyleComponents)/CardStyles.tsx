import { LinkThemed } from "@/components/ComponentThemes";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";


export default function CardStyles() {
  return (
    <div>
      <div className="bg-background-1 p-5 rounded-lg text-center ">
        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mb-5">Card</p>
        <div className="flex xl:justify-around  flex-wrap">
        
        <Card  className="card max-w-[500px]">
            <CardHeader className="flex gap-3">
                <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
                />
                <div className="flex flex-col text-left">
                <p className="text-md">Card Header</p>
                <p className="text-small text-muted-text">stephenleachman.com</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody className="text-p-text">
                <p>Make beautiful websites regardless of your design experience. Make beautiful websites regardless of your design experience....</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <LinkThemed
                    color="iconLink"
                    href="#"
                    showAnchorIcon
                    isExternal
                >
                 External Link
                </LinkThemed>
            </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  )
}
