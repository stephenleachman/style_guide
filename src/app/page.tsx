import { ButtonThemed } from "@/components/ComponentThemes";
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-[93vh]">
      <div className="flex justify-center">
        <div>
          <h1 className="text-4xl text-center mt-10 text-text-heading mb-10">Home</h1>
          <ButtonThemed 
            color="primary"
            as={Link}
            href="/styleguide"
    
          >
            Style Guide Here
          </ButtonThemed>
        </div>
      </div>
    </div>
  );
}
