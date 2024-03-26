const CustomInputSelect = ({
  value,
  width,
  amount,
  optionName,
  selectedCurrency,
  handleInputChange,
  handleCurrencyChange,
  disabled
}) => {
  return (
    <div className={width}>
      <div className="form-group">
        <div className="input-group">
          <input
            type="number"
            required
            value={amount}
            onChange={handleInputChange}
            className="form-control form-grp"
            placeholder="Enter amount"
            disabled={disabled}
          />
          <select
            required
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="form-control form-grp"
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
