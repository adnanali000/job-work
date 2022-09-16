import JobForm from './components/JobForm'
import JobTable from './components/jobTable'
import DataJob from './components/DataJobLog'

export default [
    
    { path: "/", component: JobForm  
        // children:[{ path: "/jobs", component: table2},]
    },

    { path: "/alljobs", component: JobTable },
    {path: "/datajoblog",component: DataJob},
   
]