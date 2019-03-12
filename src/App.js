import React, { Component } from 'react';
import './App.css';
import MainContent from './MainContent';
import Date from './Date';
import jw from './img/siteLogo-jworg.svg';
import timeScale from './timeScale';

function Begin(props) {
  return (
    <div className='begin__wrapper'>
      <p className='begin'>
        В Этом поле будет находится библейский текст.
        При нажатии на него или выделенные слова вы сможете увидеть обьяснение в правой колонке.
      </p>
      <p className='begin'>
        Вся инфорамация взята из публикаций Свидетелей Иеговы и сайта <a href="https://www.jw.org/ru/">jw.org</a>. Многие даты на временной шкале не точные, а весь изложеный материал является результатом личного исследования, и не претендует на истину в последней инстанции.
      </p>
      <p className='contacts'>Если вы заметили неточности или неверную информацию, сообщите мне по адресу <a href="mailto:shtas89@gmail.com">shtas89@gmail.com</a></p>
      <button className='btn' onClick={props.data}>Начать</button>
    </div>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      beginning: 'closed',
      year: 'События с 490г. до н.э.'
    }
    this.startLearning = this.startLearning.bind(this);
    this.dateShow = this.dateShow.bind(this);
  }
  startLearning() {
    this.setState({beginning: 'open'})
  }
  dateShow(id) {
      this.setState({year: timeScale[id]});  
  }
 
  render() {
    let content = this.state.beginning === 'closed' ? <Begin data={this.startLearning} /> : <MainContent dateShow={this.dateShow} />
    return (
      <React.Fragment>
        <header>
          <h1>Противостояние двух царей</h1>
          <p>Вся инфорамация взята из публикаций, Свидетелей Иеговы и сайта  <a href="https://www.jw.org/ru/" title="jw.org"><img src={jw} alt="JW.ORG" width='30px'/></a></p>
          {this.state.beginning === 'closed'? null : <Date date={this.state.year} />}
        </header>
        <section className="main">
            {content}
        </section>
      </React.Fragment>
    );
  }
}

export default App;
