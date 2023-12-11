import CardComponent from "./Cards/cards"
import { Cards } from "./bootCards/cards"
import { Cards2 } from "./bootCards/cards2"
import { Cards3 } from "./bootCards/cards3"
import { Forms } from "./bootForms/forms"
import Table from "./tables/table"

function App(){
    return(
        <>
        <Table/>
        <section className="d-flex m-5 p-5">
        <Cards/>
        <Cards2/>
        <Cards3/>
        </section>

        <Forms/>
        <CardComponent/>
        </>
    )
}
export default App