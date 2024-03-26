const CustomInputSelect = ({
  value,
  width,
  amount,
  optionName,
  selectedCurrency,
  handleInputChange,
  handleCurrencyChange,
  disabled,
}) => {
  return (
    <div className={width}>
      <div className="form-group d-flex justify-content-center">
        <div className="input-group" style={{ width: "80%" }}>
          <input
            type="number"
            required
            value={amount}
            onChange={handleInputChange}
            style={{
              width: "60%",
              height: "50px",
            }}
            className="form-control form-grp bg-dark text-light"
            placeholder="Enter amount"
            disabled={disabled}
          />
          <select
            required
            disabled={disabled}
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="form-control form-grp bg-dark text-light"
          >
            <option value="" disabled>
              Select
            </option>
            <option value={value}>{optionName}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CustomInputSelect;
