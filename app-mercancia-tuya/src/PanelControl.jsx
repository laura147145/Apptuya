
import Card from './Card';
import Menulateral from './Menulateral';

const PanelControl = () => {

    return (
        <section className="panel-control">
            <Menulateral></Menulateral>
            <div className="panel-control-contenido">
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </section>
    )
}

export default PanelControl;