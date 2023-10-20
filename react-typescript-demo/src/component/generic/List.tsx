import React from 'react';

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id} {/* You should display the item's ID or another property, not the entire object */}
          </div>
        );
      })}
    </div>
  );
};

export default List;
