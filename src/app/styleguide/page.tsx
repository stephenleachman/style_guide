
import ButtonStyles from "./(StyleComponents)/ButtonStyles"
import CardStyles from "./(StyleComponents)/CardStyles"
import ChipStyle from "./(StyleComponents)/ChipStyle"
import Colors from "./(StyleComponents)/Colors"
import FontStyles from "./(StyleComponents)/FontStyles"
import InputStyles from "./(StyleComponents)/InputStyles"
import LinkStyles from "./(StyleComponents)/LinkStyles"


export default function StyleGuide() {
  return (
    <>
      <section className="bg-background-2 min-h-[200px] flex items-center justify-center">
        <div className="container my-5">
          <h1 className="text-5xl text-center text-text-heading font-semibold">Style <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">Guide</span></h1>
          <p className="text-center mt-5 leading-7 text-text-p font-semibold text-lg">A interactive lybary of all compnits and their styles</p>
        </div>
      </section>
      <section className="bg-background-1 flex items-center justify-center mt-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-heading-text text-4xl">Fonts</h2>
              <FontStyles />
              <h2 className="text-heading-text text-4xl mt-10">Buttons & Links</h2>
              <ButtonStyles />
              <LinkStyles />
              <h2 className="text-heading-text text-4xl mt-10">Card</h2>
              <CardStyles />
              <h2 className="text-heading-text text-4xl mt-10">Chip</h2>
              <ChipStyle />
              <h2 className="text-heading-text text-4xl mt-10">Forms & Inputs</h2>
              <InputStyles />
            </div>
            <div>
              <h2 className="text-heading-text text-4xl">Colors</h2>
              <Colors />
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
}
