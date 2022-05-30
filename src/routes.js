import {createSwitchNavigator, createAppContainer} from 'react-navigation'

import Home from './componentes/Home';
import Votar from './componentes/Votar';
import Resultado from './componentes/Resultado'



const Rotas = {
    Home:{
        name: "Home",
        screen: Home
    },
    Votar:{
        name: "Votar",
        screen: Votar
    },
    Resultado: {
        name: "Resultado",
        screen: Resultado
    },
}

const Navegacao = createSwitchNavigator(Rotas);
export default createAppContainer(Navegacao)