import { Circle } from '@phosphor-icons/react/dist/ssr/Circle'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr/GithubLogo'
import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr/LinkedinLogo'
import Link from 'next/link'
import { FooterList } from './FooterList'
import { FooterListList } from './FooterList/FooterListList'

const contacts = [
  'jamdeveloper0@gmail.com',
  '+55 (11) 94700-7927'
]

export function Footer() {
  return (
    <div className="relative bg-container-900 overflow-hidden">
      <footer className="relative z-10 py-3 px-4 flex flex-col backdrop-blur-lg">
        <div className='flex items-stretch flex-1 mb-4'>
          <FooterList.Root>
            <FooterList.Title>
              Contatos
            </FooterList.Title>

            <FooterListList>
              {
                contacts.map(contact => (
                  <li key={contact}>
                    <span className='block'>
                      {contact}
                    </span>
                  </li>
                ))
              }
            </FooterListList>
          </FooterList.Root>

          <div className='w-1 bg-container-700' />

          <FooterList.Root>
            <FooterList.Title>
              Redes Sociais
            </FooterList.Title>

            <FooterListList>
              <li>
                <Link href='' className='flex gap-x-1'>
                  <GithubLogo className='w-4 h-4' />

                  <span className='underline underline-offset-1 decoration-tertiary-400'>
                    @JamDev0
                  </span>
                </Link>
              </li>

              <li>
                <Link href='' className='flex gap-x-1'>
                  <LinkedinLogo className='w-4 h-4' />

                  <span className='underline underline-offset-1 decoration-tertiary-400'>
                    Juan Garcia
                  </span>
                </Link>
              </li>
            </FooterListList>
          </FooterList.Root>

          <div className='w-1 bg-container-700 hidden md:block' />

          <FooterList.Root className='hidden md:flex'>
            <FooterList.Title>
              Links
            </FooterList.Title>

            <FooterListList>
              <li>
                <Link href=''>
                  <span className='underline block underline-offset-1 decoration-tertiary-400'>
                    Home
                  </span>
                </Link>
              </li>

              <li>
                <Link href='' className='block'>
                  <span className='underline block underline-offset-1 decoration-tertiary-400'>
                    Projetos
                  </span>
                </Link>
              </li>

              <li>
                <Link href='' className='block'>
                  <span className='underline block underline-offset-1 decoration-tertiary-400'>
                    Eu
                  </span>
                </Link>
              </li>
            </FooterListList>
          </FooterList.Root>
        </div>


        <span className='text-center text-4'>
          Desenvolvido por @JamDev0
        </span>
      </footer>

      <Circle weight='fill' className='w-44 h-44 text-primary-400 absolute bottom-0 translate-y-1/2 blur-lg right-0 translate-x-1/3' />
    </div>
  )
}