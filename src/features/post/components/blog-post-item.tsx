import { Badge } from '@/components/ui/badge'
import clsx from 'clsx'
import { sampleSize } from 'lodash'
import { Link2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostItemView: React.FC<{
  title: string
  coverImage: string
  date: string
  url: string
  tags: string[]
}> = ({ title, coverImage, date, url, tags }) => (
  <div className="w-full flex flex-col gap-3">
    <div className="cursor-pointer relative aspect-video w-full rounded-xl overflow-hidden">
      <Link href={url} passHref>
        <Image
          className={clsx(
            'w-full h-full object-cover',
            'bg-primary',
            'ring-1 ring-muted',
            'scale-100 transition-all duration-300 ease-in-out hover:scale-110',
          )}
          src={coverImage}
          width={600}
          height={400}
          loading="lazy"
          // placeholder="blur"
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="
          alt={`${title} preview`}
        />

        <div
          className={clsx(
            'mb-3 absolute top-0 left-0 w-full h-full ',
            // 'transition-all duration-1200 ease-in',
            'bg-primary/30',
            'pointer-events-none',
          )}></div>
        <h1
          className={clsx(
            'text-lg absolute top-0 left-0 p-5 leading-5 font-bold text-white pointer-events-none',
          )}
          style={{
            textShadow: '0px 1px 0px rgba(0, 0, 0, 0.6)',
          }}>
          {title}
        </h1>
        {/* If content is a url, show a link icon */}
        {url.startsWith('http') && (
          <span className="absolute left-3 bottom-2 text-muted pointer-events-none">
            <Link2 className="text-primary-foreground" />
          </span>
        )}
        <div className="absolute right-3 bottom-3 text-muted pointer-events-none">
          {/* {<p>tags:{JSON.stringify(tags)}</p>} */}
          {sampleSize(tags, 2)?.map((tag) => (
            <Badge
              key={tag}
              className={clsx(
                'mr-2 text-xs rounded-xl',
                // 'bg-accent text-muted-foreground',
                'bg-popover text-popover-foreground',
              )}>
              {tag}
            </Badge>
          ))}
        </div>
      </Link>
    </div>
    {/*  */}
    <div>
      <span className="text-xs text-muted-foreground">{date}</span>
    </div>
  </div>
)

export default PostItemView
