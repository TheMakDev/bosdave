import { FaTools, FaPumpSoap, FaCarCrash } from 'react-icons/fa';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';



export const services = [
  {
    title: "SUPPLY OF FURNITURE",
    description: "EAt BOSDAVE ENGINEERING COMPANY LIMITED, our Procurement Unit has consistently risen to meet the demands of national supply needs. We specialize in delivering efficient, reliable furniture supply and delivery solutions offering our clients the convenience of a single point of contact and full accountability throughout the process",
    icon: <FaTools size={24} className="text-blue-600" />,
    image: img1,
  },
  {
    title: "SUPPLY OF OFFICE INTERIORS",
    description: "BOSDAVE ENGINEERING COMPANY LIMITED has a proven track record in providing comprehensive office interior solutions from supplying desks and tables to delivering a wide range of office interior materials. With the expertise and capacity to source quality office furnishings or manage complete office installations, we ensure seamless execution. Our extensive experience in designing efficient office layouts, combined with premium products, allows us to create functional and aesthetically pleasing workspaces that our clients trust.",
    icon: <FaPumpSoap size={24} className="text-blue-600" />,
    image: img2,
  },
  {
    title: "COMPUTER/ STATIONERY SUPPLIES",
    description: "Modern offices require quick and reliable access to a wide array of IT products and consumables. At BOSDAVE ENGINEERING COMPANY LIMITED, we supply an extensive selection of top-quality computer hardware, peripherals, and consumables from leading brands such as HP, Canon, Epson, and Xerox. We also provide a full range of stationery essentials to meet the daily operational needs of any office environment.",
    icon: <FaCarCrash size={24} className="text-blue-600" />,
    image: img3,
  },
  {
    title: "SOLAR WATER PUMPING SYSTEMS",
    description: "Solar water pumping systems offer a cost-effective and sustainable solution, especially in remote locations. By utilizing photovoltaic technology, these systems significantly reduce fuel costs compared to traditional generator-powered pumps—often paying for themselves over time through energy savings. Ideal for rural water supply, agricultural use, mobile units, marine applications, recreational vehicles, and even decorative water features, solar pumping provides reliable access to water with minimal environmental impact.",
    icon: <FaPumpSoap size={24} className="text-blue-600" />,
    image: img4,
  },
  
];