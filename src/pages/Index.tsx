import Poem from "@/components/Poem";
import SoftDivider from "@/components/SoftDivider";
import BotanicalSketch from "@/components/BotanicalSketch";
import PastelSection from "@/components/PastelSection";
import ClosingSection from "@/components/ClosingSection";

const poems = [
  {
    title: "A Soul Winter's Eve",
    lines: [
      "I choose to open my eyelids to let in the light,",
      "and observe the wilderness that sprawls past its undertow.",
      "Barren treetops offer a view into the shrub depths that glow",
      "endlessly, beyond what I can envision past my sight.",
      "",
      "A marbled windowsill rests snug against bruised elbows,",
      "padded by the remnants of a devastating cough.",
      "Forehead pressed against the icy pane as the mind runs off",
      "with an image of pines buried deep in snow.",
      "",
      "Darkness engulfs the scene like a colony of ants scrambling for life.",
      "Shadows form glyphs on the popcorn textured ceiling,",
      "morphing left and right, in and out of a stuttered gasping,",
      "flirting existence with the sunlit edge of a glimmering knife.",
      "",
      "The silence of faint rustling awakens a dormant forebode of longing,",
      "for soothing warmth curated from a fruitful season of autumn.",
      "Eyelids close as a water lily's final petal floats to the icy earth's bottom,",
      "laying to rest the world's lust for a new day's dawning."
    ]
  },
  {
    title: "Tranquility",
    lines: [
      "A cardinal flies by the clearing I'm in,",
      "bringing me blissful joy from its chirping.",
      "The scent of wood bark hangs crisply in the air,",
      "drawing me into its tranquil and hazy fog.",
      "Traffic noises hum and whir, honk and beep,",
      "a constant reminder like a homeless shelter,",
      "of the world that chugs along without me.",
      "",
      "I long to spend eternity here,",
      "where I can conceal my presence,",
      "where nature won't push me into a puppet,",
      "where I can live past existing.",
      "The rustling of fallen leaves,",
      "the faint laughter of playful children,",
      "the flapping of a butterfly's delicate wings,",
      "invite me into a lucid dream,",
      "free from a chaotic world of disease."
    ]
  },
  {
    title: "a hint of reminiscence",
    lines: [
      "i still remember what it was like",
      "to be in kindergarten.",
      "sitting criss cross applesauce,",
      "on a polka dot carpet.",
      "patiently counting the seconds",
      "until recess,",
      "or the beloved snack time.",
      "on the weekends,",
      "i would be busy,",
      "with chinese school, soccer practice, and Sunday church.",
      "but after school,",
      "when no one wanted to play,",
      "there was a feeling of infinite time,",
      "accompanied with boredom and silence.",
      "everyday i wanted to be grown,",
      "because adults treated me different,",
      "and in that moment i didn't want that.",
      "but i should have cherished that time,",
      "that freedom, and that innocence.",
      "",
      "i am no longer a child,",
      "with real responsibilities and laboring tasks",
      "like searching for a job,",
      "building relationships,",
      "and making time for sleep.",
      "expectations are raised",
      "and needs must be met.",
      "there's never enough time in the day,",
      "for me to ponder about myself.",
      "life is harder now,",
      "my emotions are more complex,",
      "and i have a future to worry about.",
      "",
      "i wish i could go back",
      "to kindergarten one more time.",
      "or maybe just tell my younger self",
      "to stare into that carpet,",
      "and don't look away."
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
        <div className="max-w-2xl mx-auto relative">
          <BotanicalSketch 
            variant="branch" 
            className="absolute -right-24 top-4 w-32 text-foreground hidden lg:block"
          />
          <Poem {...poems[0]} />
        </div>
      </PastelSection>

      <SoftDivider variant="accent" />

      {/* Second poem - subtle blush */}
      <PastelSection color="blush" className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl mx-auto relative">
          <BotanicalSketch 
            variant="fern" 
            className="absolute -left-16 top-12 w-14 text-foreground hidden lg:block"
          />
          <BotanicalSketch 
            variant="flower" 
            className="absolute -right-20 bottom-1/4 w-12 text-foreground hidden lg:block"
            flip
          />
          <Poem {...poems[1]} />
        </div>
      </PastelSection>

      <SoftDivider variant="dots" />

      {/* Third poem - lavender whisper */}
      <PastelSection color="lavender" className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl mx-auto relative">
          <BotanicalSketch 
            variant="leaf" 
            className="absolute -left-16 top-1/4 w-16 text-foreground hidden lg:block"
          />
          <BotanicalSketch 
            variant="sprig" 
            className="absolute -right-20 top-1/2 w-20 text-foreground hidden lg:block"
          />
          <BotanicalSketch 
            variant="bud" 
            className="absolute -left-12 bottom-20 w-10 text-foreground hidden lg:block"
            flip
          />
          <Poem {...poems[2]} />
        </div>
      </PastelSection>

      {/* Quiet closing */}
      <ClosingSection />
    </main>
  );
};

export default Index;
