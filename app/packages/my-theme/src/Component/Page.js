import { connect } from "frontity"
import { Container } from "@chakra-ui/layout"
import {Image,Text,Center} from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"


const Page = ({ state, ...props}) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const [isSmallerThan992] = useMediaQuery("(min-width: 992px)")
    console.log(state);
    return (
        <>
            
            <Container>
                <Text textStyle="tittlePage" > {isSmallerThan992 ? "PETS - Mascotas para tí":""} </Text>
                <Center>
                    <Image width  = {["sm","md","lg"] } src={page.acf.image} alt="pet" />
                </Center>
                <Text  textStyle= "namePet" textAlign = {isSmallerThan992 === true ? "left":"center"} >Nombre: {page.acf.name}</Text>
                <Text textStyle = "restPet" textAlign = {isSmallerThan992 === true ? "left":"center"} > Tipo: {page.acf.type}  </Text>
                <Text textStyle = "razaPet" textAlign = {isSmallerThan992 === true ? "left":"center"} > Raza: {page.acf.breed} </Text>
                <Text textStyle = "restPet" textAlign = {isSmallerThan992 === true ? "left":"center"} > Genero: {page.acf.gender} </Text>
                <Text textStyle = "restPet" textAlign = {isSmallerThan992 === true ? "left":"center"} > Edad: {page.acf.age} Año(s) </Text>
                <Text textStyle = "restPet" textAlign = {isSmallerThan992 === true ? "left":"center"} > Descripción: {page.acf.description} </Text>


                
            </Container>

        </>

    )
}

export default connect(Page)