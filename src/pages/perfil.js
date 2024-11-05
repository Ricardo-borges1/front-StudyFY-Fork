// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import TituloTela from '../styles/tituloTela';
import Silvia from '../assets/silvia.png';
import Estrelas from '../assets/estrela.png';
import Pessoas from '../assets/pessoas.png';
import Emblema1 from '../assets/emblema1.png';
import Emblema2 from '../assets/emblema2.png';
import Calabreso from '../assets/calabreso.png';

const Perfil = () => {
  return (
    <Container style={{ backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh' }}>
      <TituloTela style={{ marginBottom: '2vh' }}>Perfil</TituloTela>
      <div style={{ flexGrow: '1', width: '100%', backgroundColor: 'white', overflowY: 'auto', paddingInline: '5vw', color: 'white' }}>
        
        {/* Seção de perfil */}
        <div style={{ textAlign: 'center', padding: '2vh 0' }}>
          <img src={Silvia} alt="Perfil" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
          <div style={{ backgroundColor: '#FEE101', borderRadius: '10px', marginTop: '-74px', height: '150px' }}>
            <h2 style={{ color: '#302F2F', paddingTop: '70px', fontWeight: 'bold' }}>Silvia Santos</h2>
            <p style={{ color: '#302F2F' }}>Entrou em 2021</p>
          </div>
        </div>

        {/* Seção de especialização */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1vh 0' }}>
          <div>
            <p style={{ fontWeight: 'bold', color: '#302F2F', marginLeft: '20px' }}>Especialização</p>
            <p style={{ color: '#302F2F', marginLeft: '20px' }}>História</p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold', color: '#302F2F' }}>Professor</p>
          </div>
        </div>

        {/* Botão de mentoria */}
        <button style={{ backgroundColor: '#FEE101', border: 'none', padding: '5px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginLeft: '20px' }}>
          Ver grupo <br /> 
          de mentoria
        </button>

        {/* Seção de Rank - Mentor e Tabelas */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5vh' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ color: '#302F2F', fontSize: '22px', fontWeight: 'bold', marginLeft: '20px' }}>Rank - Mentor</h2>
            <div>
              <img src={Estrelas} alt="Perfil" style={{ width: '150px', height: '30px', marginTop: '30px', marginLeft: '20px' }} />
              <p style={{ color: '#302F2F', marginTop: '-5px', marginLeft: '40px', fontSize: '12px' }}>(150 avaliações)</p>
            </div>

            {/* Contêiner das barras com porcentagens */}
            <div style={{ marginTop: '30px' }}>
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '5px', marginLeft: '0' }}>
                  <p style={{ color: 'black', fontSize: '12px', marginRight: '5px' }}>{rating}</p>
                  <div style={{ backgroundColor: '#D9D9D9', height: '10px', width: '140px', borderRadius: '5px', position: 'relative' }}>
                    <div style={{ backgroundColor: '#302F2F', height: '100%', width: `${rating * 17}%`, borderRadius: '5px' }}></div>
                  </div>
                  <p style={{ color: 'black', fontSize: '12px', marginLeft: '5px' }}>{`${rating * 17}%`}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tabela de 150 pessoas ajudadas */}
          <div style={{ flex: 1, marginLeft: '20px' }}>
            <div style={{ marginTop: '20px' }}>
              <h3 style={{ color: '#302F2F', fontSize: '14px', fontWeight: 'bold', marginLeft: '10px' }}>150 pessoas ajudadas</h3>
              <div style={{ border: '2px solid #D9D9D9', overflow: 'hidden' }}>
                {/* Cabeçalho da tabela */}
                <div>
                  <div style={{ display: 'flex', padding: '5px', backgroundColor: 'white', fontSize: '10px' }}>
                    <span style={{ flex: 1, marginTop: '2px', color: 'black' }}>#7</span>
                    <img src={Pessoas} alt="Perfil" style={{ width: '20px', height: '20px', marginLeft: '-10px' }} />
                    <span style={{ flex: 3, fontSize: '8px', marginLeft: '10px', marginTop: '3px', color: 'black' }}>grande ewewww...</span>
                    <span style={{ flex: 1, marginTop: '2px', color: 'black' }}>174</span>
                  </div>
                  <div style={{ display: 'flex', padding: '5px', backgroundColor: '#D9D9D9', fontSize: '10px' }}>
                    <span style={{ flex: 1, marginTop: '2px', color: 'black' }}>#8</span>
                    <img src={Pessoas} alt="Perfil" style={{ width: '20px', height: '20px', marginLeft: '-10px' }} />
                    <span style={{ flex: 3, fontSize: '8px', marginLeft: '10px', marginTop: '3px', color: 'black' }}>Silvia Santos</span>
                    <span style={{ flex: 1, marginTop: '2px', color: 'black' }}>8</span>
                  </div>
                  <div style={{ display: 'flex', padding: '5px', backgroundColor: 'white', fontSize: '10px' }}>
                    <span style={{ flex: 1, marginTop: '2px', color: 'black' }}>#9</span>
                    <img src={Pessoas} alt="Perfil" style={{ width: '20px', height: '20px', marginLeft: '-10px' }} />
                    <span style={{ flex: 3, fontSize: '8px', marginLeft: '10px', marginTop: '3px', color: 'black' }}>Tom Holland</span>
                    <span style={{ flex: 1, marginTop: '2px', color: 'black' }}>132</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Tabela de 4.5 estrelas */}
            <div style={{ flex: 1, right: '20px', transform: 'translateY(20px)' }}>
              <h3 style={{ color: '#302F2F', fontSize: '14px', fontWeight: 'bold', marginLeft: '30px' }}>4.5 estrelas</h3>
              <div style={{ border: '2px solid #D9D9D9', overflow: 'hidden' }}>
                {/* Cabeçalho da tabela */}
                <div>
                  <div style={{ display: 'flex', padding: '5px', backgroundColor: 'white', fontSize: '10px' }}>
                    <span style={{ flex: 1, marginTop: '2px', color: 'black' }}>#1</span>
                    <img src={Pessoas} alt="Perfil" style={{ width: '20px', height: '20px', marginLeft: '-10px' }} />
                    <span style={{ flex: 3, fontSize: '8px', marginLeft: '10px', marginTop: '3px', color: 'black' }}>Silvia Santos</span>
                    <span style={{ flex: 1, marginTop: '2px', color: 'black' }}>174</span>
                  </div>
                  <div style={{ display: 'flex', padding: '5px', backgroundColor: '#D9D9D9', fontSize: '10px' }}>
                    <span style={{ flex: 1, marginTop: '2px', color: 'black' }}>#2</span>
                    <img src={Pessoas} alt="Perfil" style={{ width: '20px', height: '20px', marginLeft: '-10px' }} />
                    <span style={{ flex: 3, fontSize: '8px', marginLeft: '10px', marginTop: '3px', color: 'black' }}>João Pedro</span>
                    <span style={{ flex: 1, marginTop: '2px', color: 'black' }}>132</span>
                  </div>
                  <div style={{ display: 'flex', padding: '5px', backgroundColor: 'white', fontSize: '10px' }}>
                    <span style={{ flex: 1, marginTop: '2px', color: 'black' }}>#3</span>
                    <img src={Pessoas} alt="Perfil" style={{ width: '20px', height: '20px', marginLeft: '-10px' }} />
                    <span style={{ flex: 3, fontSize: '8px', marginLeft: '10px', marginTop: '3px', color: 'black' }}>Tom Holland</span>
                    <span style={{ flex: 1, marginTop: '2px', color: 'black' }}>132</span>
                  </div>
                </div>
              </div>
            </div>
             {/* Seção Meus Emblemas */}
             <div style={{ marginTop: '30px', padding: '10px', textAlign: 'center', marginLeft: '-170px'}}>
  <h3 style={{ color: '#302F2F', fontWeight: 'bold', marginBottom: '15px' }}>Meus Emblemas</h3>
  <div style={{ display: 'flex', justifyContent: 'center'}}>
    <div style={{ width: '70px', height: '70px', margin: '10px', backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={Emblema1} alt="Emblema 1" style={{ width: '50px', height: '50px' }} />
    </div>
    <div style={{ width: '70px', height: '70px', margin: '10px', backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={Emblema2} alt="Emblema 2" style={{ width: '50px', height: '50px' }} />
    </div>
    <div style={{ width: '70px', height: '70px', margin: '10px', backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={Calabreso} alt="Emblema 1" style={{ width: '50px', height: '50px' }} />
    </div>
  </div>
</div>


</div>
          </div>
        </div>
      
      <Navegacao />
    </Container>
  );
};

export default Perfil;
