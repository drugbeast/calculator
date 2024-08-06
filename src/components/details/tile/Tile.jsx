import cn from './Tile.module.scss'

function Tile(props) {
  const { symbol, px, py } = props
  return (
    <div style={{ padding: `${py}px ${px}px` }} className={cn.symbol}>
      <span>{symbol}</span>
    </div>
  )
}

export default Tile
