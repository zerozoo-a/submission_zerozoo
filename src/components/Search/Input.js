export const Input = ({ handleOnChange, handleOnClick }) => {
  return (
    <div>
      <form>
        <input onChange={handleOnChange} type="text" />
        <input type="submit" onClick={handleOnClick} />
      </form>
    </div>
  );
};
