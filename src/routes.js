import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))
const Employees = React.lazy(() => import('./views/employees/Employees'))
const EmployeesCreate = React.lazy(() => import('./views/employees/Create'))
const EmployeesUpdate = React.lazy(() => import('./views/employees/Update'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/employees', name: 'Employees', element: Employees },
  { path: '/employees/create', name: 'Employees Creation', element: EmployeesCreate },
  { path: '/employees/update', name: 'Employees Update', element: EmployeesUpdate },
]

export default routes
