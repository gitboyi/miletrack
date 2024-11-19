import Header from '../../components/Header/Header'
import Calculator from '../../components/Calculator/Calculator'
import './Homepage.css'

export default function Home(){
  return (
    <div>
      <Header/>
      <div className='app-info'>
        <h3>MILEAGE CALCULTAOR</h3>
        <p>MileTrack is a simple tool that helps you determine your vehicle's fuel efficiency.
           By entering the total distance travelled and the amount of fuel consumed or money spent on fuel,
            the calculator can quickly calculate your fuel efficiency. So you can monitor your vehicle's performance, 
            identify areas for improvement, and make informed decisions to reduce fuel consumption and save money.</p>
      </div>
      <div className='calc'>
        <Calculator/>
      </div>
    </div>
  )
}