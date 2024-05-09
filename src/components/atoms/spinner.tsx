import { UpdateIcon } from '@radix-ui/react-icons'

export default function Spiner() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3 py-12 text-accent">
      <UpdateIcon className="animate-spin w-9 h-9" />
      <span className="tex-sm text-muted-foreground">loading...</span>
    </div>
  )
}
