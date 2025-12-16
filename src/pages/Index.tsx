import Poem from "@/components/Poem";
import SoftDivider from "@/components/SoftDivider";
import DecorativeAccent from "@/components/DecorativeAccent";
import PastelSection from "@/components/PastelSection";
import ClosingSection from "@/components/ClosingSection";

const poems = [
  {
    title: "Morning Light",
    author: "Anonymous",
    lines: [
      "The window holds",
      "a square of sky—",
      "",
      "pale blue dissolving",
      "into white,",
      "",
      "the day arriving",
      "without ceremony,",
      "",
      "soft as breath",
      "on cold glass."
    ]
  },
  {
    title: "Small Hours",
    author: "Anonymous",
    lines: [
      "In the quiet before dawn",
      "I find myself",
      "collecting silences—",
      "",
      "the space between",
      "one heartbeat and the next,",
      "",
      "the pause before",
      "the kettle sings."
    ]
  },
  {
    title: "Garden Notes",
    author: "Anonymous",
    lines: [
      "The roses are remembering",
      "how to open.",
      "",
      "Each petal",
      "a decision made slowly,",
      "",
      "the way we learn",
      "to trust the light."
    ]
  },
  {
    title: "Letter to Myself",
    author: "Anonymous",
    lines: [
      "Be gentle",
      "with the hours.",
      "",
      "They are doing",
      "their best to hold you—",
      "",
      "each one a small room",
      "you are invited",
      "to sit in."
    ]
  },
  {
    title: "After Rain",
    author: "Anonymous",
    lines: [
      "The world returns",
      "washed clean,",
      "",
      "each leaf holding",
      "its own small sky,",
      "",
      "and I am learning",
      "what it means",
      "to begin again."
    ]
  },
  {
    title: "Evening",
    author: "Anonymous",
    lines: [
      "The light is soft now,",
      "forgiving.",
      "",
      "Even the shadows",
      "have softened their edges,",
      "",
      "making room",
      "for rest."
    ]
  }
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Opening breath - minimal entry */}
      <div className="h-16 md:h-24" />
      
      {/* First poem - cream background */}
      <PastelSection color="cream" className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-lg mx-auto">
          <Poem {...poems[0]} />
        </div>
      </PastelSection>

      <SoftDivider variant="accent" />

      {/* Second poem - subtle blush */}
      <PastelSection color="blush" className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-lg mx-auto relative">
          <DecorativeAccent 
            variant="wave" 
            className="absolute -top-8 right-0 w-24 text-foreground"
          />
          <Poem {...poems[1]} />
        </div>
      </PastelSection>

      <SoftDivider variant="dots" />

      {/* Third poem - lavender whisper */}
      <PastelSection color="lavender" className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-lg mx-auto">
          <Poem {...poems[2]} />
        </div>
      </PastelSection>

      {/* Large breathing space */}
      <SoftDivider variant="space" className="h-32 md:h-48" />

      {/* Fourth poem - sage green */}
      <PastelSection color="sage" className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-lg mx-auto relative">
          <DecorativeAccent 
            variant="leaf" 
            className="absolute -left-12 top-1/4 w-8 text-foreground hidden md:block"
          />
          <Poem {...poems[3]} />
        </div>
      </PastelSection>

      <SoftDivider variant="line" />

      {/* Fifth poem - soft sky */}
      <PastelSection color="sky" className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-lg mx-auto relative">
          <DecorativeAccent 
            variant="circle" 
            className="absolute -top-4 -right-8 w-16 text-foreground hidden md:block"
          />
          <Poem {...poems[4]} />
        </div>
      </PastelSection>

      <SoftDivider variant="dots" />

      {/* Final poem - return to cream */}
      <PastelSection color="cream" className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-lg mx-auto">
          <Poem {...poems[5]} />
        </div>
      </PastelSection>

      {/* Quiet closing */}
      <ClosingSection />
    </main>
  );
};

export default Index;
