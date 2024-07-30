'use client'

import { signIn } from 'next-auth/react'
import { Button } from '~/components/ui/button'

type SignInButtonProps = {
  provider: 'Google' | 'Github'
}

export function SignInButton({ provider }: SignInButtonProps) {

  // eslint-disable-next-line @next/next/no-img-element
  const GoogleIcon = <img loading="lazy" src="https://authjs.dev/img/providers/google.svg" alt='Google Icon' />

  // eslint-disable-next-line @next/next/no-img-element
  const GithubIcon = <img loading="lazy" src="https://authjs.dev/img/providers/github.svg" alt='Github Icon' />

  return (
    <Button onClick={() => signIn(provider.toLowerCase())} variant="secondary">
      <div className='h-5 w-5 mr-2'> 
        {provider === 'Github' ? GithubIcon : GoogleIcon}
      </div>
      Sign in with {provider}
    </Button>
  )
}