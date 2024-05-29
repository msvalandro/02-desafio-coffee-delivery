import { CoffeeList } from './coffee-list'
import { Intro } from './intro'

export function Home() {
  return (
    <main>
      <div className="mx-auto my-0 max-w-[1440px]">
        <Intro />
        <CoffeeList />
      </div>
    </main>
  )
}
