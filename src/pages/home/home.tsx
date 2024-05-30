import { CoffeeList } from './coffee-list'
import { Intro } from './intro'

export function Home() {
  return (
    <main>
      <div className="mx-auto my-0 mb-40 max-w-[1120px]">
        <Intro />
        <CoffeeList />
      </div>
    </main>
  )
}
