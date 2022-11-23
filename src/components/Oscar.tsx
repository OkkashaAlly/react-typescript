type OscarTypes = {
  children: React.ReactNode;
}

export default function Oscar(props: OscarTypes) {
  return (
    <div>{props.children}</div>
  )
}
