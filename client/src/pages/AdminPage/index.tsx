import React from 'react';
import './styles.css'

const AdminPage: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="navbar">
            <div className='navbar-name-icon'>
                <img></img>
                <h3>karthi Madesh</h3>
                <p>Admin</p>
            </div>
            <div className='navbar-box'>
                <button>Funcionários</button>
                <button>Relatórios</button>
            </div>
        </div>
        <div>
            <h1 className='funcionarios-h1'>Funcionários</h1>
            <table>
                <thead>
                    <tr>
                        <th>GDY</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Função</th>
                        <th>Data de Admissão</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>08-Dec, 2021</td>
                        <td>Karthi</td>
                        <td>karthi@gmail.com</td>
                        <td>Admin</td>
                        <td>08-Dec, 2021</td>
                    </tr>
                    <tr>
                        <td>08-Dec, 2021</td>
                        <td>Carlos</td>
                        <td>carlos@gmail.com</td>
                        <td>Cerente</td>
                        <td>08-Dec, 2021</td>
                    </tr>
                </tbody>
            </table>
            <a href="#" className="btn">Adicionar Funcionário</a>
        </div>
    </div>
    </>
  );
};

export default AdminPage;
