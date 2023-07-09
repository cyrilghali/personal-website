import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import { BlogNewsletterForm } from '@/components/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from '@/components/Image'
const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {siteMetadata.author}
            </h1>
            <h2 className="pb-6 prose text-lg text-gray-200 dark:text-gray-200  tracking-widest">
              SOFTWARE ENGINEER
            </h2>
            <h3 className="prose text-lg text-gray-600 dark:text-gray-400">
              I'm on a mission to help companies build reliable and scalable systems and
              infrastructures.
              <br />
              I'm now working at <a href="https://kpmg.com/lu/en/home.html">KPMG Luxembourg</a> as a
              Platform Engineer. <br />
              I've also worked for a startup studio called{' '}
              <a href="https://goodwave.io">Goodwave</a>; where I crafted, as the only engineer,
              products like <a href="https://laserpitch.com">Laserpitch</a>,{' '}
              <a href="https://sonar.so">Sonar</a> and{' '}
              <a href="https://technoandchill.com">Techno &amp; Chill</a>. Feel free to contact me
              at `contact @ this domain`
            </h3>
            <Link
              href="/resume"
              className="focus:shadow-outline mt-6 inline-flex items-center rounded-sm bg-primary-700 px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out hover:bg-primary-700 hover:text-indigo-100 focus:outline-none focus:ring-2  focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-600"
            >
              Resume
            </Link>
          </div>
          <div className="mx-2 my-12 flex w-96 items-center justify-center hidden md:block">
            <Image
              src="/static/images/prog-pdp.jpg"
              width="398px"
              height="381px"
              alt="avatar"
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>
        <h2 className="flex py-6 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
