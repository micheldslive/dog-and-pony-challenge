import React, { PropsWithChildren } from 'react'

const Main = ({ children }: PropsWithChildren) => {
  return (
    <main className='mx-auto min-h-screen w-full max-w-[320px] pb-12 pt-[160px]'>
      {children}
    </main>
  )
}

const Section = ({ children }: PropsWithChildren) => {
  return <section className='py-6'>{children}</section>
}

import { OfficeList } from '@/shared/office'
import { ExternalLink } from '@/ui/navigation'
import { Toast, ToastProvider } from '@/ui/overlay'

const Root = () => {
  return (
    <ToastProvider>
      <Toast />
      <main className='mx-auto min-h-screen w-full max-w-[320px] pb-12 pt-[160px]'>
        <header className='pb-6'>
          <h1 className='text-accent-blue text-center text-[4rem] font-light leading-none'>
            Offices
          </h1>
        </header>
        <section className='py-6'>
          <OfficeList />
        </section>
        <footer className='flex flex-col items-center gap-2'>
          <span className='block text-center'>
            This project is for test purpose only.
          </span>
          <ExternalLink
            className='text-center text-xs uppercase leading-none tracking-wide '
            href='https://www.dogandponystudios.com/'
          >
            www.dogandponystudios.com
          </ExternalLink>
        </footer>
      </main>
    </ToastProvider>
  )
}

export const OfficesLayout = {
  Root,
  Main,
  Section,
}
