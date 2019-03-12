import React from 'react';
import imgGog from "./img/gog.jpg";

function Gog() {
    return (
        <div className="gog-sidebar">
            <h3>Кого представляет Гог из Магога, упомянутый в книге Иезекииля?</h3>
            <p>
            Чтобы ответить на этот вопрос, необходимо установить, кто, согласно Библии, выступит против Божьего народа. Помимо нападения Гога из Магога, в Священном Писании говорится о нападении «северного царя» и нападении «царей земли» (Иез. 38:2, 10—13; Дан. 11:40, 44, 45; Отк. 17:14; 19:19). Будут ли это разные нападения? Вряд ли. По всей видимости, Библия по-разному называет одно и то же нападение. Почему можно прийти к такому выводу? Потому что в Священном Писании сказано, что в последнем нападении, которое приведет к Армагеддону, примут участие все народы земли (Отк. 16:14, 16).
            </p>
            <img src={imgGog} alt="Гог - коалиция наций" width='100%'/>
        </div>
    )
}
export default Gog;