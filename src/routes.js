import JobForm from './components/JobForm'
import JobTable from './components/jobTable'
import DataJob from './components/DataJobLog'
import DataJobDetail from './components/DataJobDetail'

export default [
    
    { path: "/", component: JobForm  
        // children:[{ path: "/jobs", component: table2},]
    },

    { path: "/viewjobs", component: JobTable },
    {path: "/datajoblog",component: DataJob},
    {path: "/datajobdetail/:id", component: DataJobDetail}
   
]