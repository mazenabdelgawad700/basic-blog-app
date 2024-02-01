import { ReactNode } from 'react';

interface Items<T> {
  items: T[];
  render: (item: T) => ReactNode
}

const ListItems = <T,>({items, render}: Items<T>) => {
  return (
  <ul>
    {items.map((item, i) => (
      <li key={i}>
        {render(item)}
      </li>
    ))}
  </ul>
  )
}

  export default ListItems;
