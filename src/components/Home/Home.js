import AppHeader from '../AppHeader/AppHeader';
import ImgMediaCard from '../ImageMediaCard/ImageMediaCard';


export default function Home(){
let numbers = [1,2,3,4,5,6];
return <>
    <AppHeader/>
       <div>
       {
           numbers.map((number)=>{
             return  <ImgMediaCard number={number}></ImgMediaCard>
           })
       }
       </div>
      
    </>;
}