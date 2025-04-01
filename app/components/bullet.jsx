
export default function Bullet({icon = 'nearby', size = '15px'}) {
    return (
        <div className="row-center" style={{justifyContent: "center"}}>
            <span className="material-symbols-outlined" style={{fontSize: size, color: "rgb(77, 0, 128)"}}>{icon}</span>
        </div>
    )
}