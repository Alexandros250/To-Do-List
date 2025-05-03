function CheckBox() {
  return (
    <>
      <div className="flex items-center  mb-4 checkbox">
        <input
          id="checkbox-default"
          type="checkbox"
          value=""
          className="w-5 h-5 appearance-none border cursor-pointer border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
        />
        <label
          htmlFor="checkbox-default"
          className="text-sm font-norma cursor-pointer text-gray-600"
        >
          Default checkbox
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
          checked
        />
        <label
          htmlFor="checked-checkbox"
          className="text-sm font-normal cursor-pointer text-gray-600"
        >
          {" "}
          Checked checkbox
        </label>
      </div>
    </>
  );
}

export default CheckBox;
