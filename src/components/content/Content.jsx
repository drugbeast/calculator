import Canvas from '../canvas/Canvas'
import Details from '../details/Details'
import cn from './Content.module.scss'

function Content() {
  return (
    <section className={cn.content}>
      <section className={cn.container}>
        <Details />
        <Canvas />
      </section>
    </section>
  )
}

export default Content
