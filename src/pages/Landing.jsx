import useCountdownRedirect from '../hooks/useCountdownRedirect';
import './Landing.css'

const Landing = () => {
    const countdown = useCountdownRedirect(5, '/catalog');

    return (
        <div className="container-fluid landing d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center mb-3">Bienvenido a Relatos de Papel</h1>
            <p className="text-muted text-center">Redireccionando en {countdown} segundos...</p>
        </div>
    );
};

export default Landing;
