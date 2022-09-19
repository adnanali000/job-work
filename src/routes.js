import JobForm from './components/JobForm'
import JobTable from './components/jobTable'
import DataJob from './components/DataJobLog'

export default [
    
    { path: "/job/:id", component: JobForm  , props: route => {
            console.log('route.params',route.params)
            return { id: route.params.id === 'new' ?  null : route.params.id }
        }},

    { path: "/alljobs", component: JobTable },
    {path: "/datajoblog",component: DataJob},
   
]