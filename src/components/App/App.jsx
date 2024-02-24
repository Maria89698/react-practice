import { Component } from 'react';
import './App.css';
import styles from './App.module.css'
import { PureComponent } from 'react';
// import { Header } from 'components/Header';
// import painting from './components/Painting/paintingJSON.json'
// import { PaintingList } from "./components/PaintingList/PaintingList";
// import { Recipe } from "./components/recipe/Recipe";
// import recipies from "./recipies.json";
// import { ColorPicker } from 'components/ColorPicker/ColorPicker';
// import {colorPickerOptions} from '../../colorOptions';
// import { Alert } from 'components/ColorPicker/Alert/Alert';
// import { Container, Title } from "./App.styled";
// import { GlobalStyle } from 'GlobalStyle.styled';
// import { DropDownMenu } from 'components/DropDownMenu/DropDownMenu';


// const box = {color: 'red', fontSize: '18', margin: '50px, 50px'};

// export class App extends Component {
//   // state = {
//   //   name: '',
//   //   tel: '',
//   //   level: '',
//   //   lisence: false
//   // }

//   // handleChange = (e) =>{
//   //   this.setState({
//   //     name: e.currentTarget.value
//   //   })
//   // }

//   // handleSubmit = (e) =>{
//   //   e.preventDefault()
//   //   console.log(e.currentTarget.elements.name.value);
//   // }

//   render(){
//     return (
//         <div>
//           {/* <Container>
//             <Title>Title</Title>
//           </Container> */}

//           {/* <Header>
//             <nav>Навігація</nav>
//           </Header> */}

//           {/* <PaintingList painting={painting}/> */}

//           {/* <Recipe recipe={recipies}/> */}

//           {/* <div style={box}>Стилізований бокс</div>
//           <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Sapiente praesentium soluta pariatur ipsa quos ipsam aliquid quidem nulla sunt itaque.
//           </p>
//           <p className={styles.text-module}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Sapiente praesentium soluta pariatur ipsa quos ipsam aliquid quidem nulla sunt itaque.
//           </p> */}

//           {/* <ColorPicker options={colorPickerOptions}/> */}

//           {/* <Alert text="Останнє попередження!"/>
//           <Alert text="Ура! Все ок!"/>
//           <Alert text="О жах - все пропало!"/> */}
          
//           {/* <GlobalStyle/> */}
//           {/* <DropDownMenu/> */}

          
//           {/* <form onSubmit={this.handleSubmit}>
//             <label>Name
//               <input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
//             </label>
//             <br />
//             <label>Telefone number
//               <input type="tel" name='tel' value={this.state.tel} onChange={this.handleChange}/>
//             </label>
//             <label>
//               junior
//               <input
//                 type="text"
//                 name='junior'
//                 value={this.state.level}
//                 checked={this.state.level === 'junior'}
//                 onChange={this.handleRadioChange}/>
//             </label>
//             <label>
//               middle
//               <input
//                 type="text"
//                 name='middle'
//                 value={this.state.level}
//                 checked={this.state.level === 'middle'}
//                 onChange={this.handleRadioChange}/>
//             </label>
//             <label>
//               senjor
//               <input
//                 type="text"
//                 name='senjor'
//                 value={this.state.level}
//                 checked={this.state.level === 'senjor'}
//                 onChange={this.handleRadioChange}/>
//             </label>

//             <label>
//               <input
//                 type="checkbox"
//                 checked={this.state.lisence}
//                 name='lisence'
//                 onChange={this.handleCheckboxChange}/>
//             </label>
//           </form> */}
//         </div>
        
//       )
//   }
  
// }



import { PokemonForm } from 'components/Pokemon/PokemonForm';
import {PokemonInfo} from 'components/Pokemon/PokemonInfo';

export class App extends PureComponent {
  state = {
    pokemon: ''
  }

  

  async componentDidMount() {
    try {
      
    } catch (error) {
      
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
      .then(res=>res.json())
  }

  onNameChange = (name) => {
    this.setState({
      pokemon: name
    })
  }

  render(){
    return(
      <div style={{ maxWidth: 1170,  }}>
        <PokemonForm onNameChange={this.onNameChange}/>
      </div>
    )
  }
}