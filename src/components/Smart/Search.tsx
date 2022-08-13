import React from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { Form, Input, } from "antd";
import { searchBarItem } from "../../store/reducers/filter/action-creators";

const Search: React.FC = () => {
const dispatch = useDispatch();

const [value, setValue] = React.useState<string>('');

const updateSearchValue = React.useCallback(
  debounce((str: string) => {
    dispatch(searchBarItem(str));
  }, 500),
  [],
);

const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
  updateSearchValue(event.target.value);
};


  return (
    <Form className="header-form__search">
      <Input
        style={{borderRadius: "10px", padding: "10px"}}
        type="text"
        allowClear
        placeholder="Поиск..."
        className="form-control"
        value={value}
        onChange={onChangeInput}
      />
      
    </Form>
  );
};

export default Search;