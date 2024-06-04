import americanoImg from '../../assets/americano.png'
import arabeImg from '../../assets/arabe.png'
import cafeComLeiteImg from '../../assets/cafe-com-leite.png'
import cafeGeladoImg from '../../assets/cafe-gelado.png'
import capuccinoImg from '../../assets/capuccino.png'
import chocolateQuenteImg from '../../assets/chocolate-quente.png'
import cubanoImg from '../../assets/cubano.png'
import expressoImg from '../../assets/expresso.png'
import expressoCremosoImg from '../../assets/expresso-cremoso.png'
import havaianoImg from '../../assets/havaiano.png'
import irlandesImg from '../../assets/irlandes.png'
import latteImg from '../../assets/latte.png'
import macchiatoImg from '../../assets/macchiato.png'
import mocaccinoImg from '../../assets/mochaccino.png'
import { CoffeeItem } from './coffee-item'

const data = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 1,
    tags: ['tradicional'],
    imageUrl: expressoImg,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    quantity: 1,
    tags: ['tradicional'],
    imageUrl: americanoImg,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    quantity: 1,
    tags: ['tradicional'],
    imageUrl: expressoCremosoImg,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    quantity: 1,
    tags: ['tradicional', 'gelado'],
    imageUrl: cafeGeladoImg,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    quantity: 1,
    tags: ['tradicional', 'com leite'],
    imageUrl: cafeComLeiteImg,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    quantity: 1,
    tags: ['tradicional', 'com leite'],
    imageUrl: latteImg,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    quantity: 1,
    tags: ['tradicional', 'com leite'],
    imageUrl: capuccinoImg,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    quantity: 1,
    tags: ['tradicional', 'com leite'],
    imageUrl: macchiatoImg,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    quantity: 1,
    tags: ['tradicional', 'com leite'],
    imageUrl: mocaccinoImg,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    quantity: 1,
    tags: ['especial', 'com leite'],
    imageUrl: chocolateQuenteImg,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    quantity: 1,
    tags: ['especial', 'alcoólico', 'gelado'],
    imageUrl: cubanoImg,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    quantity: 1,
    tags: ['especial'],
    imageUrl: havaianoImg,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    quantity: 1,
    tags: ['especial'],
    imageUrl: arabeImg,
  },
  {
    id: 14,
    name: 'Irlândes',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    quantity: 1,
    tags: ['especial', 'alcoólico'],
    imageUrl: irlandesImg,
  },
]

export function CoffeeList() {
  return (
    <>
      <h2 className="font-title text-title-l text-base-subtitle">
        Nossos cafés
      </h2>

      <ul className="mt-12 grid grid-cols-4 gap-10">
        {data.map((coffee) => (
          <CoffeeItem key={coffee.id} {...coffee} />
        ))}
      </ul>
    </>
  )
}
