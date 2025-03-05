
function Card({info}){
    console.log(info);
    
    return (
        <section className="panel-control-card">
                <div>
                    <h2>Id:{info.id}</h2>
                    <h3>Destino:{info.destino}</h3>
                    <h3>Origen:{info.origen}</h3>
                </div>
                <div>Ver</div>
            </section>
    )
}
export default Card;