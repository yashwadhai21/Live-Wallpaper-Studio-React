import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {

  const tabs = ['photos','videos','gif']

   const dispatch = useDispatch()
   const activeTab = useSelector((state) => state.search.activeTab)
  return (
    <div className='mx-auto mt-8 flex max-w-6xl flex-wrap gap-3 px-4 sm:px-6 lg:px-8'>
        {tabs.map(function(elem,idx){
            return (
                <button className={`${(activeTab==elem?'border-cyan-300/40 bg-cyan-300/12 text-white shadow-lg shadow-cyan-950/25':'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10')} cursor-pointer rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition active:scale-95`}
                key={idx}
                onClick={()=>{
                dispatch(setActiveTab(elem))
                }}
                >{elem}</button>
            )
        })}
    </div>
  )
}

export default Tabs
