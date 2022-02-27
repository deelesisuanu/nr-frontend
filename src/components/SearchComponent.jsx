import { OutlinedInput } from "@material-ui/core";

const SearchComponent = ({placeholder}) => {
  return (
    <OutlinedInput
      className="nft-search"
      placeholder={placeholder}
      className="stake-input"
      width="70%"
    />
  );
};

export default SearchComponent