import Badge from '../../shared/ui/Badge/Badge'
import RightUp from '../../shared/icons/RIghtUp.svg'

export default function Material({ data }) {
  return (
    <Badge as="a" variant="neutral" href={data.url} target="_blank" className="hover:opacity-80 transition-all">
      {data.name}
      <RightUp className="size-4" />
    </Badge>
  )
}
