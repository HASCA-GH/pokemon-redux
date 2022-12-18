import {Card} from 'antd'
import Meta from 'antd/es/card/Meta'
import PruebaPoke from '../images/132.png'

const PokemonCard = () => {
  return (
    <Card 
        style={{width: 200}}
        title="Ditto"
        // cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="Ditto"/>}
        cover={<img src={PruebaPoke} alt="Ditto"/>}
    >
        <Meta description="Fire, magic"/>
    </Card>
  )
}

export default PokemonCard