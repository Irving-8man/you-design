export default function Page({ params }: { params: { id: string } }) {
  return <div>Principal para proyecto: {params.id}</div>
}