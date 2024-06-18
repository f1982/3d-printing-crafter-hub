import React, { PropsWithChildren } from 'react'

export default function PageRows(props: PropsWithChildren) {
  return <div className="container flex flex-col gap-12">{props.children}</div>
}
