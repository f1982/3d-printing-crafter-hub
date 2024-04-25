type Props = {
  title: string
  paragraphs: string[]
}

export default function PageIntro({ title, paragraphs }: Props) {
  return (
    <div className="prose prose-md dark:prose-invert max-w-none">
      <h2>{title}</h2>
      {paragraphs.map((p: string) => {
        return <p key={p}>{p}</p>
      })}
    </div>
  )
}
