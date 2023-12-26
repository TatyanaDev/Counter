import { useEffect, useState } from "react";
import RemainingTime from "../../components/RemainingTime";
import Settings from "../../components/Settings";
import style from "./counter.module.scss";

const Counter = () => {
  const [isDisplayInitialAutoClick, setIsDisplayInitialAutoClick] =
    useState(false);
  const [isHiddenSettings, setIsHiddenSettings] = useState(false);
  const [isAutoClick, setIsAutoClick] = useState(false);
  const [clickCount, setClickCount] = useState(10);
  const [isAdding, setIsAdding] = useState(true);
  const [stepValue, setStepValue] = useState(1);
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const autoClickTime = 30000;
  const intervalTime = 1000;
  let clicked = 0;

  const changeCount = () =>
    setCount((count) => (isAdding ? count + step : count - step));

  useEffect(() => {
    setIsAutoClick(true);
    setIsDisplayInitialAutoClick(true);

    const intervalId = setInterval(() => changeCount(), intervalTime);

    setTimeout(() => {
      clearInterval(intervalId);
      setIsAutoClick(false);
      setIsDisplayInitialAutoClick(false);
    }, autoClickTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeStep = () => setStep(stepValue || 1);

  const handleStepChange = ({ target: { value } }) =>
    setStepValue(parseInt(value));

  const changeMode = () => setIsAdding((isAdding) => !isAdding);

  const autoClick = () => {
    if (clickCount > 0) {
      setIsAutoClick(true);

      const intervalId = setInterval(() => {
        clicked++;

        if (clicked === clickCount) {
          clearInterval(intervalId);
          setIsAutoClick(false);
        }

        changeCount();
        setClickCount(clickCount - clicked);
      }, intervalTime);
    }
  };

  const handleClickCountChange = ({ target: { value } }) =>
    setClickCount(parseInt(value));

  const changeHiding = () =>
    setIsHiddenSettings((isHiddenSettings) => !isHiddenSettings);

  return (
    <section className={style.wrapper}>
      <article className={style.container}>
        <h1 className={style.title}>You change the value to:&nbsp;{step}</h1>
        <p className={style.value}>{count}</p>

        <div className={style.flexBetween}>
          <Settings
            changeHiding={changeHiding}
            isHiddenSettings={isHiddenSettings}
            changeMode={changeMode}
            isAutoClick={isAutoClick}
            changeCount={changeCount}
            isAdding={isAdding}
            changeStep={changeStep}
            step={step}
            handleStepChange={handleStepChange}
            autoClick={autoClick}
            clickCount={clickCount}
            handleClickCountChange={handleClickCountChange}
          />

          <RemainingTime
            isDisplayInitialAutoClick={isDisplayInitialAutoClick}
            autoClickTime={autoClickTime}
            intervalTime={intervalTime}
            count={count}
            clickCount={clickCount}
          />
        </div>
      </article>
    </section>
  );
};

export default Counter;
