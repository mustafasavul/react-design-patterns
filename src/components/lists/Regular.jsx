export const RegularList = ({ items, sourceName, ItemComponent }) => {
  console.log('RegularList: ', items);
  console.log('RegularList: ', sourceName);
  console.log('RegularList: ', ItemComponent);

  return (
    <>
      {items.map((item, index) =>
        <ItemComponent
          key={index}
          {...{ [sourceName]: item }}
        />)}

      {/* <ItemComponent
                key={index}
                // hard coded to authors, but could be anything
                authors={item}
        /> */}
    </>
  )
};