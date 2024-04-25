import { BreadcrumbNav } from '@/components/atoms/breadcrumb-nav'
import Prose from '@/components/atoms/prose'
import { siteMetadata } from '@/config/setting'
import { Mdx } from '@/utils/mdx/mdx-components'
import { allPages } from 'contentlayer/generated'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params: PageProps['params']) {
  const slug = params?.slug?.join('/')
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    return null
  }

  return page
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    // throw new Error('Failed to fetch page')
    return {}
  }

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords ?? '',
    metadataBase: siteMetadata.metadataBase,
    alternates: {
      canonical: '/' + params.slug[0],
    },
  }
}

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split('/'),
  }))
}

export default async function Page({ params }: PageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <div className="container">
      <BreadcrumbNav
        breadcrumbs={[
          {
            label: 'Home',
            route: '/',
          },
          {
            label: page.title,
            route: '/' + page.slug,
          },
        ]}
      />
      <Prose>
        <Mdx code={page.body.code} />
      </Prose>
    </div>
  )
}
