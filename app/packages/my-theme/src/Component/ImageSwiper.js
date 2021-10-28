import {connect} from 'frontity';
import {Swiper, SwiperSlide} from 'swiper/react'
import {Image} from "@chakra-ui/react"
import Link from './Link';
const ImageSwiper = ({state}) => {

    const data = state.source.get("/pets/")

    const swipers = [];
    const dataPet = []

    data.items.map((item) =>{
        const postData =  state.source.get(item.link)
     
        dataPet.push({
            image: state.source[postData.type][postData.id].acf.image,
            link: item.link,
            name: state.source[postData.type][postData.id].acf.name
        });
    })

    dataPet.map((data,index)=>{
        swipers.push(
            
                <SwiperSlide key={`slide-${index}` } tag={"ul"}>
                
                    <div className = "slide-content">
                        <Image width  = {["sm","md","lg"] } src = {data.image} let={`pet${index}`} tag={"li"}></Image>
                        <div><Link  href={data.link}>Conoce a:{data.name}</Link></div>
                    </div>
                    
                    
            </SwiperSlide>
        
        )
        
    })

    return(
        <>
            <Swiper
            
            grabCursor={true}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} className="mySwiper">
                {swipers}
            </Swiper>
          
        </>
    )

}


export default connect(ImageSwiper);