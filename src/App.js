import EmployeeList from "./components/EmployeeList";
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import AddEmployee from "./components/AddEmployee";
function App(){
  return(
    <BrowserRouter>
<div>

 <Routes>
    
    <Route path="/" element={<EmployeeList/>}/>
    <Route path="/add" element={<AddEmployee/>}/>
    <Route path="/employees/edit/:id" element={<AddEmployee />} />
    <Route path="*" element={<NotFound/>}/>
    
    </Routes>
 
</div>
</BrowserRouter>
  )
}
export default App;