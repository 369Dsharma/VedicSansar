import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-4xl mx-auto bg-gray-800 text-white border rounded-3xl pl-2 pr-2 "
        defaultValue="item-1"
      >
        <AccordionItem value="item-1" className="border-b">
          <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-medium py-4 sm:py-5 [&>svg]:text-white ">
            Why VedicSansar?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 sm:gap-4 text-balance pb-4 sm:pb-6">
            <p className="text-sm sm:text-base leading-relaxed text-white">
              Vedic Sansar offers carefully selected gemstones, Rudraksha, bracelets, rings, pendants, and spiritual products with a focus on quality and authenticity.

            </p>
            <p className="text-sm sm:text-base leading-relaxed text-white">
              Our goal is to make authentic spiritual products accessible for everyone seeking positivity, balance, and mindful living.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b">
          <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-medium py-4 sm:py-5 [&>svg]:text-white ">
            How do crystals work?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 sm:gap-4 text-balance pb-4 sm:pb-6">
            <p className="text-sm sm:text-base leading-relaxed text-white">
              Crystals have been valued for centuries in various cultures for their natural beauty and symbolic meanings.
              Different crystals are traditionally associated with different qualities, such as confidence, calmness, focus, or emotional balance.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-white">
              Wearing crystals as bracelets, rings, or pendants allows people to keep these meaningful symbols close to them throughout the day.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b">
          <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-medium py-4 sm:py-5 [&>svg]:text-white ">
            How to use them?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 sm:gap-4 text-balance pb-4 sm:pb-6">
            <p className="text-sm sm:text-base leading-relaxed text-white">
              Crystals can be worn as bracelets, rings, pendants, or carried with you as a personal reminder of your intentions.
              Wear on your non-dominant wrist (left for most people) to absorb the crystal’s energy.

Wear daily and set a clear intention each morning for best results.


            </p>
            <p className="text-sm sm:text-base leading-relaxed text-white">
              Cleanse before first use:


In salt water for 10–20 seconds (avoid for delicate stones like Selenite or Pyrite).
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-b">
          <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-medium py-4 sm:py-5 [&>svg]:text-white ">
            How to charge them?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 sm:gap-4 text-balance pb-4 sm:pb-6">
            <p className="text-sm sm:text-base leading-relaxed text-white">
              Many crystal users believe that charging helps refresh the energy of a crystal and reconnect it with your intentions.
              Crystals can traditionally be charged by placing them under moonlight, especially during a full moon.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-white">
              Recharge monthly:

Place the bracelet on a Selenite plate overnight, or
Place the bracelet under full moonlight overnight.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-b">
          <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-medium py-4 sm:py-5 [&>svg]:text-white ">
            In which hand to wear bracelets?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 sm:gap-4 text-balance pb-4 sm:pb-6">
            <p className="text-sm sm:text-base leading-relaxed text-white">
              The left hand is called the receiving hand in some traditions. Wearing your bracelet here helps you attract abundance, inner peace, and positive vibes.
            </p>
            
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border-b">
          <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-medium py-4 sm:py-5 [&>svg]:text-white ">
            Can I wear more than one?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 sm:gap-4 text-balance pb-4 sm:pb-6">
            <p className="text-sm sm:text-base leading-relaxed text-white">
              Yes! You can wear more than one to get the maximum benefits and based 
              on your numerology charts or zodiac sign.
            </p>
            
          </AccordionContent>
        </AccordionItem>

       
      </Accordion>
    </div>
  )
}