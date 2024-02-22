export const SmallAuthorListItem = ({ authors }) => {
  const {name, age} = authors;

  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};