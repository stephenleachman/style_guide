import { ButtonThemed, LinkThemed } from "@/components/ComponentThemes"
import { Link } from "@nextui-org/react"


export default function ButtonStyles() {
  return (
    <div>
      <div className="bg-background-1 p-5 rounded-lg text-center ">
        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mt-10">Links</p>
        <div className="flex xl:justify-around  flex-wrap">

          <LinkThemed 
            color="textLink"
            href="#"
            className="mr-5 mt-5"
            >
            Text Link
          </LinkThemed>

          <LinkThemed 
            color="navLink"
            href="#"
            className="mr-5 mt-5"
            >
            Navigation
          </LinkThemed>

          <LinkThemed 
            color="iconLink"
            href="#"
            className="mr-5 mt-5"
            // anchorIcon={<AnchorIcon />}
            showAnchorIcon
            >
            Link With Icon
          </LinkThemed>

          <ButtonThemed 
            color="primary"
            href="#"
            as={Link}
            className="mr-5 mt-5"
            >
            Button Link
          </ButtonThemed>
          
        </div>
      </div>
    </div>
  )
}
