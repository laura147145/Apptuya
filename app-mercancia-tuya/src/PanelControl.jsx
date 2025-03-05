
import Card from './Card';
import Menulateral from './Menulateral';

const PanelControl = () => {
    let envios =[
        {
            origen:"Medellin",
            destino: "Bogota",
            id:"PEDIDO2390"
        },
        {
            origen:"Medellin",
            destino:"Cali",
            id: "PEDIDO908"
        },
        {
            origen:"Medellin",
            destino:"Nekocli",
            id:"PEDIDO4564"
        },
    ]

    return (
        <section className="panel-control">
            <Menulateral></Menulateral>
            <div className="panel-control-contenido">
                {
                    envios.map((envio)=>{
                        return<Card info={envio} />
                    }
                    )
                }
            </div>
        </section>
    )
}

export default PanelControl;