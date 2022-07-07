import React,{useState} from "react"
import './App.css';

const carros = [
  {categoria:"Esporte",preco:"20300",modelo:"golf-gtu"},
  {categoria:"Esporte",preco:"12000",modelo:"ford cross"},
  {categoria:"SUV",preco:"52000",modelo:"HRV"},
  {categoria:"SUV",preco:"2000",modelo:"T-CROSS"},
  {categoria:"Utilitario",preco:"23000",modelo:"Hillux"},
  
  {categoria:"Utilitario",preco:"245000",modelo:"Ranger"}

]


const linha =(cat)=>{
  const li = []
  carros.forEach(
    (carro) => {
    if(carro.categoria.toUpperCase() == cat.toUpperCase() || cat.toUpperCase() == ""){
      li.push(
        <tr>
          <td>{carro.categoria}</td>
          <td>{carro.preco}</td>
          <td>{carro.modelo}</td>
        </tr>
      )
     }
    }
   )
    return li
  }
  

//função que ira retornar a tabela

const tabelaCarros=(cat)=>{
  return(
    <table border="1" style={{borderCollapse:"collapse"}}>
      <thead>
        <tr>
          <th>categoria</th>
          <th>preço</th>
          <th>modelo</th>
        </tr>
      </thead>
      <tbody>
        {linha(cat)}
      </tbody>
    </table>
  )
  
  }

  const pesquisaCat=(cat,scat)=>{
    return(
    <div>
      <label>Digite uma categoria</label> <br/>
      <input className="input__pesquisa" onChange={(e)=>scat(e.target.value)} value={cat} type="text"/>
    </div>
    )
  }
  


export default function App(){
const [categoria, setCategoria] = useState("");



  return(
    <div className="container__principal">
    {pesquisaCat(categoria,setCategoria)}
    <br/>
    {tabelaCarros(categoria)}
    </div>
  )
}













