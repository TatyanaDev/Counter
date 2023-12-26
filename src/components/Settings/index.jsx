import style from "./settings.module.scss";

const Settings = ({
  changeHiding,
  isHiddenSettings,
  changeMode,
  isAutoClick,
  changeCount,
  isAdding,
  changeStep,
  step,
  handleStepChange,
  autoClick,
  clickCount,
  handleClickCountChange,
}) => (
  <div>
    <h2
      onClick={changeHiding}
      className={`${style.subTitle} ${style.cursorPointer}`}
    >
      Counter settings (click me)
    </h2>

    {!isHiddenSettings && (
      <>
        <div className={style.marginBottom}>
          <button
            onClick={changeMode}
            disabled={isAutoClick}
            className={style.button}
          >
            Change mode +/-
          </button>

          <button
            onClick={changeCount}
            disabled={isAutoClick}
            className={style.button}
          >
            {isAdding ? "Add" : "Subtract"}
          </button>
        </div>

        <div className={style.marginBottom}>
          <button
            onClick={changeStep}
            disabled={isAutoClick}
            className={style.button}
          >
            Change step:
          </button>
          <input
            type="number"
            placeholder="step"
            defaultValue={step}
            onChange={handleStepChange}
            readOnly={isAutoClick}
            className={style.stepInput}
          />
        </div>

        <div>
          <button
            onClick={autoClick}
            disabled={isAutoClick}
            className={style.button}
          >
            Auto-click
          </button>
          <input
            type="number"
            placeholder="click count"
            value={clickCount}
            onChange={handleClickCountChange}
            readOnly={isAutoClick}
            className={style.autoClickInput}
          />
        </div>
      </>
    )}
  </div>
);

export default Settings;
