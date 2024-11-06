import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Navegacion from '../components/Navegacion';
import { navigationConfig } from './navigationConfig';
import './styles/InformesReportes.css'

const transactionData = [
    { date: '2023-06-01', transactions: 5000, revenue: 25000 },
    { date: '2023-06-02', transactions: 5200, revenue: 26000 },
    { date: '2023-06-03', transactions: 4800, revenue: 24000 },
    { date: '2023-06-04', transactions: 5100, revenue: 25500 },
    { date: '2023-06-05', transactions: 5300, revenue: 26500 },
  ]
  
  const vehicleFlowData = [
    { time: '00:00', flow: 100 },
    { time: '04:00', flow: 80 },
    { time: '08:00', flow: 200 },
    { time: '12:00', flow: 180 },
    { time: '16:00', flow: 220 },
    { time: '20:00', flow: 150 },
  ]
  
  export default function InformesReportes() {
    const [selectedTab, setSelectedTab] = useState('transactions')
    const [exportFormat, setExportFormat] = useState('pdf')
    const location = useLocation();
    const currentSection = location.pathname.split('/')[1]; // obtiene 'registrar-usuarios'
    const { title, actions } = navigationConfig[currentSection];
  
    const handleExport = () => {
      console.log(`Exporting in ${exportFormat} format`)
      // Implement export logic here
    }
  
    return (
      <div className="dashboard">
        <NavBar />
        <Navegacion title={title} actions={actions} />  
        <main className="main-content">
          <div className="top-bar">
            <h2>Informes y Reportes</h2>
            <div className="export-controls">
              <select 
                value={exportFormat} 
                onChange={(e) => setExportFormat(e.target.value)}
              >
                <option value="pdf">PDF</option>
                <option value="excel">Excel</option>
                <option value="csv">CSV</option>
              </select>
              <button onClick={handleExport}>Exportar</button>
            </div>
          </div>
          <div className="tabs">
            <button 
              className={selectedTab === 'transactions' ? 'active' : ''} 
              onClick={() => setSelectedTab('transactions')}
            >
              Transacciones
            </button>
            <button 
              className={selectedTab === 'daily' ? 'active' : ''} 
              onClick={() => setSelectedTab('daily')}
            >
              Flujo diario
            </button>
            <button 
              className={selectedTab === 'weekly' ? 'active' : ''} 
              onClick={() => setSelectedTab('weekly')}
            >
              Flujo Semanal
            </button>
          </div>
  
          <div className="reports-grid">
            <div className="report-card">
              <h3>Resumen de transacciones</h3>
              {selectedTab === 'transactions' && (
                <>
                  <div className="stats-grid">
                    <div className="stat-box">
                      <h4>Total Transacciones</h4>
                      <p className="stat-value">5,234</p>
                    </div>
                    <div className="stat-box">
                      <h4>Ingresos Generados</h4>
                      <p className="stat-value">$26,170</p>
                    </div>
                  </div>

                </>
              )}
              {selectedTab === 'daily' && <p>Resumen de flujo diario aquí...</p>}
              {selectedTab === 'weekly' && <p>Resumen de flujo semanal aquí...</p>}
            </div>
  
            <div className="report-card">
              <h3>Flujo vehicular diario</h3>
            </div>
          </div>
        </main>
      </div>
    )
  }