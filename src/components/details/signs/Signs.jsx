import Tile from '../tile/Tile'
import cn from './Signs.module.scss'

const signs = [
  {
    id: 1,
    symbol: '/'
  },
  {
    id: 2,
    symbol: 'x'
  },
  {
    id: 3,
    symbol: '-'
  },
  {
    id: 4,
    symbol: '+'
  }
]

function Signs() {
  return (
    <section className={cn.signs}>
      <div className={cn.container}>
        <div className={cn.inner}>
          {signs.map((sign) => (
            <Tile symbol={sign.symbol} py={16} px={24} key={sign.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Signs
