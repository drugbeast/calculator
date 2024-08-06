import Result from './result/Result'
import Signs from './signs/Signs'
import Digits from './digits/Digits'
import cn from './Details.module.scss'

function Details() {
  return (
    <section className={cn.details}>
      <div className={cn.container}>
        <Result />
        <Signs />
        <Digits />
      </div>
    </section>
  )
}

export default Details
