import Counter from '../Counter'

export const TextTicker = () => {
  return (
    <div className="text-4xl font-semibold tracking-tight text-red-500">
      <Counter value={1000} />
    </div>
  )
}
