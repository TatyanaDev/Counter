import style from "./remaining-time.module.scss";

const RemainingTime = ({
  isDisplayInitialAutoClick,
  autoClickTime,
  intervalTime,
  count,
  clickCount,
}) => (
  <div>
    <h3 className={style.subTitle}>Remaining auto-click time:</h3>

    <div className={style.flexCenter}>
      <p className={style.value}>
        {isDisplayInitialAutoClick
          ? autoClickTime / intervalTime - count
          : clickCount || 0}
        s.
      </p>
    </div>
  </div>
);

export default RemainingTime;
