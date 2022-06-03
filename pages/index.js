import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
          <div className="pt-6">
            <h1 className="pb-6 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
              Hi, I’m Cyril GHALI
            </h1>
            <p className="prose text-lg text-gray-600 dark:text-gray-400">
              <p>
                I'm a <b>software engineer</b> from Paris.
              </p>
              <p>
                I have one year of experience in <b>software development</b> and{' '}
                <b>product management</b>.
              </p>
              <p>
                I help startups building <b>web apps</b>.
              </p>
              <p>
                In my free time, I love listening to other people's experiences and sharing my own.
                I like <b>reading</b>, <b>writing</b>, and <b>blogging</b>.
              </p>
              <p>
                My earliest availaibility is <b>February 2023.</b>
              </p>
              <p>
                Want to know more? See my <Link href={'/about'}>about</Link> page
              </p>
            </p>
          </div>
          <div className="mx-2 my-12 flex w-96 items-center justify-center"></div>
        </div>
      </div>
    </>
  )
}
