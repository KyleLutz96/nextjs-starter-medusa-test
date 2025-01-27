import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import InmateSelect from "../inmate-select"


const Hero = () => {

  return (
    <div className="h-[calc(100vh-4rem)] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex-auto sm:flex flex-col items-center text-center py-28 px-4 gap-6">
        <InmateSelect />
        {/* <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Ecommerce Starter Template
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Powered by Medusa and Next.js
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary">
            View on GitHub
            <Github />
          </Button>
        </a> */}
      </div>
      </div>
  )
}

export default Hero



