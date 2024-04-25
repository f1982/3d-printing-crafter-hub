import AuroraLight from '../../atoms/aurora-light'
import { Button } from '../../ui/button'
import { HeroProps } from './hero-type'
import clsx from 'clsx'

export default function Hero(props: HeroProps) {
  return (
    <>
      <div className={clsx('isolate relative px-6 pt-9 lg:px-8 ')}>
        <AuroraLight />
        <div className={clsx('mx-auto max-w-3xl py-12')}>
          <div className="prose prose-md md:prose-xl dark:prose-invert max-w-none text-left sm:text-center">
            <div className={clsx('hidden sm:mb-8 sm:flex sm:justify-center')}>
              {props.subtitle && (
                <div
                  className={clsx(
                    'relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20',
                  )}>
                  {props.subtitle}
                </div>
              )}
            </div>

            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div
              className={clsx(
                'mt-10 flex items-center justify-center gap-x-6',
              )}>
              {props.label && <Button variant="default">{props.label}</Button>}
              {props.secondaryLabel && (
                <Button variant="link">{props.secondaryLabel}</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
