import Counter from '../Counter'

export const TextTicker = () => {
  return (
    <div className="text-2xl font-semibold tracking-tight">
      <Counter value={1000} />
    </div>
  )
}
