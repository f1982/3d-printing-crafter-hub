type Props = {
  title: string
  paragraphs: string[]
}

export default function PageIntro({ title, paragraphs }: Props) {
  return (
    <div className="prose-md prose max-w-none dark:prose-invert">
      <h2>{title}</h2>
      {paragraphs.map((p: string) => {
        return <p key={p}>{p}</p>
      })}
    </div>
  )
}
