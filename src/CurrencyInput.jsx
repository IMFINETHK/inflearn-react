import { useState } from "react";

const CurrencyInput = () => {
  const [input, setInput] = useState({
    krw: 0,
    usd: 0,
  });

  const onChangeInput = (e) => {
    if (e.target.name == "krw") {
      setInput({
        krw: e.target.value,
        usd: e.target.value / 1300,
      });
    } else {
      setInput({
        krw: e.target.value * 1300,
        usd: e.target.value,
      });
    }
  };
  return (
    <>
      <h1>환율 변환기(KRW-USD)</h1>
      <div>
        krw:
        <input name="krw" onChange={onChangeInput} value={input.krw} />
      </div>
      <div>
        usd:
        <input name="usd" onChange={onChangeInput} value={input.usd} />
      </div>
    </>
  );
};

export default CurrencyInput;
