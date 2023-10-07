import "./Home.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Home = () => {
  return (
    <>
      <header className="fondo">
        <div>
          <h1 className="maqor">MAQOR</h1>
        </div>
        <a href="#sobre-nosotros">
          <ArrowDownwardIcon
            style={{
              fontSize: "50px",
              color: "white",
              cursor: "pointer",
              marginTop: "50px",
            }}
          />
        </a>
      </header>
      <div id="sobre-nosotros">
        <h1>Sobre nosotros</h1>
        <p>
          MAQOR S.R.L. es una empresa que provee servicios de alquiler de grúas,
          manipuladores, plataformas y brazos articulados, máquinas viales,
          carretones, generadores y compresores de aire. Con más de 40 años de
          presencia en el mercado, ha adquirido un profundo conocimiento de
          estándares técnicos para la provisión de servicios de alquiler de una
          amplia gama de equipos para la mayoría de los rubros industriales,
          montajes, logística, generación de energía, etc. La empresa cuenta con
          una importante infraestructura operativa y logística, herramientas
          informáticas de avanzada y un staff de profesionales y técnicos que
          nos permite ofrecer servicios de la más alta calidad. MAQOR S.R.L. es
          una empresa de servicios, preparada para brindar soluciones integrales
          a las necesidades de nuestros clientes, con eficiencia, calidad e
          idoneidad.
        </p>
      </div>
    </>
  );
};

export default Home;
