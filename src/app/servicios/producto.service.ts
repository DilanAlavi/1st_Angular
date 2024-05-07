import { Injectable } from '@angular/core';
import {Product} from "../interfaces/product";


@Injectable({
 providedIn: 'root'
})
export class ProductoService {
 listaDeProductos: Product[] = [
   {
     id: 1,
     title: "OLEVS Relojes Automáticos",
     price: 300,
     description: "Diseño innovador de la esfera: el tourbillon se combina con la ventana de fase lunar y la exhibición de la fecha del día, el logotipo de la corona honorable, bien diseñado en el diseño de la esfera, elementos exquisitos de vestir, cuidadosamente tallados, resaltan la belleza general, le ofrece una nueva experiencia visual y la mejor calidad de la marca.",
     category: "men's clothing",
     image: "https://m.media-amazon.com/images/I/71LFOpzmgtL._AC_SY675_.jpg",
     rating: {
       "rate": 5,
       "count": 125
     }
   },
   {
     id: 2,
     title: "AKNIGHT Men Watches ",
     price: 42.3,
     description: "Reloj de acero inoxidable: los relojes AKNIGHT para hombre son una colección de relojes plateados de diseño clásico para hombre. 100% cristal sólido y alta calidad reloj de lujo de acero inoxidable con diseño innovador de mano y esfera azul única. ",
     category: "men's clothing",
     image: "https://m.media-amazon.com/images/I/71GDnjMyvGL._AC_SY675_.jpg",
     rating: {
       "rate": 4.2,
       "count": 359
     }
   },
   {
     id: 3,
     title: "COACH Reloj Elliot para mujer",
     price: 95.99,
     description: "Recisión de cuarzo: el movimiento de cuarzo proporciona un cronometraje preciso y un mantenimiento mínimo para un reloj confiable y sin preocupaciones.",
     category: "women's clothing",
     image: "https://m.media-amazon.com/images/I/71O4kVJcuDL._AC_SY879_.jpg",
     rating: {
       "rate": 4.5,
       "count": 580
     }
   },
   {
     id: 4,
     title: "Casio Reloj analógico MQ24-7B2",
     price: 98.99,
     description: "Reloj redondo con esfera blanca con logotipo y marcadores de números arábigos.Caja de plástico de 1.378 in con ventana protectora de esfera de cristal de resin",
     category: "men's clothing",
     image: "https://m.media-amazon.com/images/I/516s1Ljzp6L._AC_SY879_.jpg",
     rating: {
       "rate": 4.5,
       "count": 420
     }
   },
   {
     id: 5,
     title: "Ferragamo Reloj suizo para mujer Colección Cuir",
     price: 695,
     description: "Elegante diámetro de la caja de 1.339 in con esfera Guilloche con marca Ferragamo Gancino a las 8 en punto",
     category: "jewelery",
     image: "https://m.media-amazon.com/images/I/61v1JjEk7JL._AC_SY675_.jpg",
     rating: {
       "rate": 4.6,
       "count": 800
     }
   },
   {
     id: 6,
     title: "Asan Ge Reloj ",
     price: 168,
     description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
     category: "jewelery",
     image: "https://m.media-amazon.com/images/I/71zj2YiutBL._AC_SX679_.jpg",
     rating: {
       "rate": 3.9,
       "count": 70
     }
   },
   {
     id: 7,
     title: "VPSTAY Reloj de seguimiento de actividad",
     price: 9.99,
     description: "VPSTAY Reloj de seguimiento de actividad física con monitor de oxígeno en sangre y frecuencia cardíaca 24/7, IP68 impermeable, contador de calorías, podómetro, rastreador de actividad de salud y",
     category: "jewelery",
     image: "https://m.media-amazon.com/images/I/61bhDXo+A0L._AC_SY300_SX300_.jpg",
     rating: {
       "rate": 3,
       "count": 400
     }
   },
   {
     id: 8,
     title: "Reloj de seguimiento de actividad física",
     price: 70.99,
     description: "Monitoreo del ritmo cardíaco y del sueño: el rastreador de ejercicios monitorea su frecuencia cardíaca automáticamente todo el día, y puede seleccionar el modo manual a través de la aplicación. El reloj de fitness también monitorea tu sueño por la noche, proporcionando un análisis detallado de la calidad de tu sueño (sueño profundo, sueño ligero, tiempo despierto). Es un asesor de salud para mujeres y hombres en la vida diaria.",
     category: "jewelery",
     image: "https://m.media-amazon.com/images/I/714FOfK5O+L._AC_SX466_.jpg",
     rating: {
       "rate": 1.9,
       "count": 100
     }
   },
   {
     id: 9,
     title: "Blekon Reloj  ",
     price: 64,
     description: "Reloj de enfermera perfecto para todos los profesionales médicos, incluyendo enfermeras, cirujanos, médicos y médicos de emergencia: con movimiento de cuarzo japonés analógico preciso de tres manecillas, esfera blanca con marcadores de 12 y 24 horas; manecillas luminosas de hora y minutos y un segundero rojo altamente visible que hace que tomar lecturas precisas de pulso sea muy fácil",
     category: "electronics",
     image: "https://m.media-amazon.com/images/I/61TNKS2a59L._AC_SY675_.jpg",
     rating: {
       "rate": 8.2,
       "count": 773
     }
   }
 ]
 obtenerTodosLosProductos(): Product[]{
   return this.listaDeProductos;
 }
 obtenerProductoPorId(id: number){
   return this.listaDeProductos.find((producto) => producto.id === id);
 }
}
