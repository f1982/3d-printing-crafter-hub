import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@/components/ui/breadcrumb'

export function BreadcrumbNav({
  breadcrumbs,
  showCurrent,
}: {
  breadcrumbs: Array<{
    label: string
    route: string
  }>
  showCurrent: boolean
}) {
  return (
    <Breadcrumb>
      {breadcrumbs
        .splice(0, breadcrumbs.length - 1)
        .map((breadcrumb, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink href={breadcrumb.route}>
              {breadcrumb.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      {showCurrent && (
        <BreadcrumbItem>
          <BreadcrumbLink>
            {breadcrumbs[breadcrumbs.length - 1].label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  )
}
