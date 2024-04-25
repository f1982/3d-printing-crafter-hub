import { UpdateIcon } from '@radix-ui/react-icons'

export default function Spiner() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3">
      <UpdateIcon fontSize={100} className="animate-spin" />
      <span className="tex-sm text-muted-foreground">loading...</span>
    </div>
  )
}
