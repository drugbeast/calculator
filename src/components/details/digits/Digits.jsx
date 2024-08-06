import Tile from '../tile/Tile'
import cn from './Digits.module.scss'

const digits = [
  { id: 1, symbol: '7' },
  { id: 2, symbol: '8' },
  { id: 3, symbol: '9' },
  { id: 4, symbol: '4' },
  { id: 5, symbol: '5' },
  { id: 6, symbol: '6' },
  { id: 7, symbol: '1' },
  { id: 8, symbol: '2' },
  { id: 9, symbol: '3' },
  { id: 10, symbol: '0' },
  { id: 11, symbol: ',' }
]

function Digits() {
  return (
    <section className={cn.digits}>
      <div className={cn.container}>
        <div className={cn.inner}>
          {digits.map((digit) =>
            digit.id == 10 ? (
              <div className={cn.zero} key={digit.id}>
                <Tile symbol={digit.symbol} />
              </div>
            ) : (
              <Tile key={digit.id} symbol={digit.symbol} />
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Digits
