export const navigationConfig = {
    'registrar-usuarios': {
      title: 'Lisado de Usuarios',
    },
    'flujo-vehicular': {
      title: 'Monitoreo Vehicular',
      actions: [
        { label: 'Ver en Tiempo Real', path: '/flujo-vehicular/tiempo-real' },
        { label: 'Histórico', path: '/flujo-vehicular/historico' }
      ]
    },
    'gestion-usuarios': {
      title: 'Gestión de Usuarios',
      actions: [
        { label: 'Lista de Usuarios', path: '/gestion-usuarios/lista' },
        { label: 'Roles y Permisos', path: '/gestion-usuarios/roles' }
      ]
    },
    'reporte': {
      title: 'Informes y Reportes',
      actions: [
        { label: 'Generar Reporte', path: '/reporte/generar' },
        { label: 'Reportes Guardados', path: '/reporte/guardados' },
        { label: 'Exportar Datos', path: '/reporte/exportar' }
      ]
    }
  };
  
  