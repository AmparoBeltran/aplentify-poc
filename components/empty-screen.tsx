import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
import Image from 'next/image'
export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Aplentify AI Chatbot!
        </h1>
        <div className="relative">
          <Image
            src={'/unicorn_with_orange_tiger_fur_walking_through_fire.png'}
            width={140}
            height={140}
            alt="Picture of the unicorn with orange tiger fur"
            className="absolute sm:bottom-0 right-0"
          />
          <div className="float-right w-5/12 h-32 sm:w-1/4 sm:mt-24 [shape-outside:circle(50%)_border-box]"></div>
          <p className="leading-normal text-muted-foreground">
            {`Hey there! I'm `}
            <span className="font-semibold dark:text-white text-sm">DanEL</span>
            {`, your friendly AI mentor assistant at Aplentify. Whether you have a
            burning question about your studies or are looking for the perfect
            mentor to guide you, I'm here to help! I can answer all sorts of
            questions you might have about general student life. Plus, I can use
            my super-matching skills to connect you with a fantastic mentor who
            shares your interests and goals. So, what are you waiting for? Let's
            get started! Let me know how I can assist you today.`}
          </p>
        </div>
      </div>
    </div>
  )
}
