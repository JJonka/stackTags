import GeneralTable from "./GeneralTableUI";
import useTagsTable from "./useTagsTable";

const StackTagsTable = () => {
  const props = useTagsTable();
  return <GeneralTable {...props}></GeneralTable>;
};

export default StackTagsTable;
