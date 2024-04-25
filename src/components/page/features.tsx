import React from 'react'

interface FeaturesProps {
  subtitle: string
  title: string
  description: string
  features: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
}

export default function Features(props: FeaturesProps) {
  const { subtitle, title, description, features } = props

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl ">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h3 className="text-base font-semibold leading-7 text-muted-foreground">
            {subtitle}
          </h3>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </p>
          <p className="mt-6 text-lg leading-8">{description}</p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.title} className="relative pl-16">
                <dt className="text-base font-semibold leading-7">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    {feature.icon}
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
