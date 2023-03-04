import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch(changeFilter);

  const handleFilterChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={handleFilterChange} />
    </FilterLabel>
  );
};
