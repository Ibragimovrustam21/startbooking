import Select, { Props } from 'react-select'
import './my-select.scss'



export function MySelect<
  Option
>(props: Props<Option>) {
  return (
    <Select {...props} />
  );
}
