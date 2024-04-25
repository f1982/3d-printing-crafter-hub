const getDateStr = () => {
  return new Date().toLocaleDateString()
}

export default function UpdatedDate() {
  return <span>Updated {getDateStr()}</span>
}
