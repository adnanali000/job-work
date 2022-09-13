import Navbar from './components/Navbar'
import JobForm from './components/JobForm'
import JobTable from './components/jobTable'

export default [
    
    { path: "/", component: JobForm  
        // children:[{ path: "/jobs", component: table2},]
    },

    { path: "/viewjobs", component: JobTable }
   
]