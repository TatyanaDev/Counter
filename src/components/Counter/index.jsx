import React, { Component } from 'react'
import styles from './counter.module.scss'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      isAdding: true,
      value: '1',
      valueClick: '',
      hidden: true,
      independentCount: 0
    }
  }

  changeMode = () => {
    const { isAdding } = this.state
    this.setState({ isAdding: !isAdding })
  }

  changeValue = () => {
    const { count, isAdding, value } = this.state
    console.log(value)
    console.log(count)
    if (isAdding) {
      this.setState({ count: count + Number(value) })
      return
    }
    this.setState({ count: count - Number(value) })
  }

  // stopClick=() => {
  //   const { count, isAdding, value,valueClick } = this.state
  //   if(valueClick){this.setState({
  //     count: (this.count = clearInterval())

  //   }),

  onSelectionChange = () => {
    const value = document.getElementById('text').value
    console.log(value)
    this.setState({
      value: value
    })
  }

  quantityClicks = () => {
    const valueQuantity = document.getElementById('quantity').value
    console.log(valueQuantity)
    this.setState({
      valueClick: valueQuantity
    })
  }

  autoClick = () => {
    const { count } = this.state
    console.log(count)
    this.count = setInterval(this.changeValue, 1000)
    // this.setState({
    //   count: ()
    // if(valueClick){
    //   this.setState ({
    //     this.count = clearInterval(this.changeValue)
    //   })

    // if (valueClick) {
    //   this.setState({ count: (this.count = clearInterval(this.changeValue)) })
    //   return
    // }
    // })
  }

  hidden = () => {
    const { hidden } = this.state
    this.setState({ hidden: !hidden })
  }

  componentDidMount() {
    this.independentCount = setTimeout(this.start, 1000)
  }

  componentDidUpdate() {
    this.clear()
    this.independentCount = setTimeout(this.start, 1000)
  }

  componentWillUnmount() {
    this.clear()
  }

  start = () => {
    const { independentCount } = this.state
    this.setState({ independentCount: independentCount + 1 })
  }

  clear = () => {
    clearInterval(this.independentCount)
    this.independentCount = null
  }

  render() {
    const { count, value, valueClick, hidden, independentCount } = this.state
    return (
      <article className={styles.container}>
        <h1 className={styles.header}>Вы изменяете значение на: {value} </h1>
        <p className={styles.count}>{count}</p>
        <div className={styles.block}>
          <div>
            <button className={styles.setting} onClick={this.hidden}>
              Настройки счетчика (click me):
          </button>
            <br />
            <div hidden={hidden}>
              <button onClick={this.changeValue} className={styles.button}>
                изменить шаг
            </button>
              <input
                id='text'
                type='text'
                name='quantity'
                placeholder='шаг'
                onChange={this.onSelectionChange}
                className={styles.bottom}
              ></input>
              <br />
              <button onClick={this.changeMode} className={styles.button}>
                изменить значение +/-
            </button>
              <br />
              <button onClick={this.autoClick} className={styles.button}>
                auto click {valueClick}
              </button>
              <input
                type='text'
                id='quantity'
                placeholder='количество кликов'
                onChange={this.quantityClicks}
              ></input>
            </div>
          </div>
          <div>
            <h1 className={styles.setting}>Самостоятельный счетчик</h1>
            <p className={styles.content}>{independentCount}</p>
          </div>
        </div>
      </article>
    )
  }
}

export default Counter
