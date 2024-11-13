import { LinkThemed } from "@/components/ComponentThemes";
import { Link } from "@nextui-org/react";


export default function FontStyles() {
  return (
    <div>
      <div className="bg-background-1 p-5 rounded-lg text-center ">
        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mb-5">Heading Styles</p>

        {/* Heading Styles */}
        <h1>H1 Heading</h1>
        <h2>H2 Heading</h2>
        <h3>H3 Heading</h3>
        <h4>H4 Heading</h4>
      
        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mt-10 mb-5">Leading Paragraph</p>
        {/* Leading Text */}
        <p className="leading">
          To create a perfect paragraph, focus on clarity and coherence rather than trying to impress. Start with a clear topic sentence that 
          introduces the main idea. 
        </p>

        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mt-10 mb-5">Paragraph</p>
        {/* Paragraph Text */}
        <p className="text-left">
          To create a perfect paragraph, focus on clarity and coherence rather than trying to impress. Start with a clear topic sentence that 
          introduces the main idea. Support this idea with <span className="font-bold">I am bold</span> details and examples, ensuring each sentence flows 
          <span> <LinkThemed color="textLink">I am a link</LinkThemed></span> the next. Use transitions to connect ideas smoothly
        </p>
        <p className="text-muted-text text-left text-sm border-b-1 border-border-color pb-1 mt-10 mb-5">Font Family</p>
        <p className="font-medium text-left text-p-text leading-relaxed text-lg tracking-wide"><span className="text-muted-text mr-3">Heading:</span> Poppins</p>
        <p className="font-medium text-left text-p-text leading-relaxed text-lg tracking-wide mt-3"><span className="text-muted-text mr-3">Paragraph:</span> Poppins</p>
      </div>
    </div>
  )
}
