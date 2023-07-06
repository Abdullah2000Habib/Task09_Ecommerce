
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StarIcon from '@mui/icons-material/Star';
import fiveStars from "../../assets/images/fiveStars-7ce6f784.svg";
import fourStars from "../../assets/images/fourStars-cde14527.svg";
import img3 from "../../assets/images/image-23.png";
import img7 from "../../assets/images/image-34.png";
import { default as img1 } from "../../assets/images/imgstore1.png";
import img4 from "../../assets/images/imgstore3.png";
import img8 from "../../assets/images/imgstore4.png";
import img5 from "../../assets/images/imgstore5.png";
import threeStars from "../../assets/images/threeStars-5af2cfc3.svg";
import twoStars from "../../assets/images/twoStars-7ff3ca46.svg";
import BottomFooter from '../../components/BottomFooter/BottomFooter';
import BottomHeader from '../../components/BottomHeader/BottomHeader';
import Menu from '../../components/Menu/Menu';
import NinthFloor from '../../components/NinthFloor/NinthFloor';
import StorCard from '../../components/StorCard/StorCard';
import TopFooter from '../../components/TopFooter/TopFooter';
import TopHeader from '../../components/TopHeader/TopHeader';
import { Container } from '../../global/components';
import { StorPageContainer, StorPageLeft, StorPageRight, StorPageRoute, StorPageRoutes, StorPageWrapper } from './Style';
const StorPage = () => {
    return (
        <StorPageWrapper>
            <TopHeader/>
            <BottomHeader/>
            <Container>
                <StorPageRoutes>
                    <StorPageRoute>Home <KeyboardArrowRightIcon/></StorPageRoute>
                    <StorPageRoute>Clothings <KeyboardArrowRightIcon/></StorPageRoute>
                    <StorPageRoute>Men’s wear <KeyboardArrowRightIcon/></StorPageRoute>
                    <StorPageRoute>Summer clothing</StorPageRoute>
                </StorPageRoutes>
                <StorPageContainer>
                    <StorPageLeft>
                        <Menu title="Brands" id="A1" type='' name="" items={["Mobile accessory","Electronics","Smartphones","Modern tech"]} isSeeAll={true}/>
                        <Menu title="Category" id="A2"  type='checkbox' name="" items={["Samsung","Apple","Huawei","Pocco","Lenovo"]} isSeeAll={true}/>
                        <Menu title="Features" id="A3" type='checkbox' name="" items={["Metallic","Plastic cover","8GB Ram","Super power","Large Memory"]} isSeeAll={true}/>
                        <Menu title="Condition" id="A4"   type='radio' name="radio1" items={["Any","Refurbished","Brand new","Old items"]} isSeeAll={true}/>
                        <Menu title="Ratings" id="A5"  type='checkbox' name="" items={[<img src={fiveStars} alt=""/>,<img src={fourStars} alt=""/>,<img src={threeStars} alt=""/>,<img src={twoStars} alt=""/>]} isSeeAll={false}/>
                    </StorPageLeft>
                    <StorPageRight>
                        <StorCard img={img1} title="Canon Cmera EOS 2000, Black 10x zoom" newPrice="$998.00" oldPrice="$1128.00" rate="7.5" dot={<FiberManualRecordIcon/>} star={<StarIcon/>} order="154 orders" react={<FavoriteBorderIcon/>} description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"/>
                        <StorCard img={img3} title="Canon Cmera EOS 2000, Black 10x zoom" newPrice="$998.00"  rate="7.5" dot={<FiberManualRecordIcon/>} star={<StarIcon/>} order="154 orders" react={<FavoriteBorderIcon/>} description="GoPro HERO6 4K Action Camera - Black"/>
                        <StorCard img={img4} title="Canon Cmera EOS 2000, Black 10x zoom" newPrice="$998.00"  rate="7.5" dot={<FiberManualRecordIcon/>} star={<StarIcon/>} order="154 orders" react={<FavoriteBorderIcon/>} description="GoPro HERO6 4K Action Camera - Black"/>
                        <StorCard img={img7} title="Canon Cmera EOS 2000, Black 10x zoom" newPrice="$998.00"  rate="7.5" dot={<FiberManualRecordIcon/>} star={<StarIcon/>} order="154 orders" react={<FavoriteBorderIcon/>} description="GoPro HERO6 4K Action Camera - Black"/>
                        <StorCard img={img8} title="Canon Cmera EOS 2000, Black 10x zoom" newPrice="$998.00" oldPrice="$1128.00" rate="7.5" dot={<FiberManualRecordIcon/>} star={<StarIcon/>} order="154 orders" react={<FavoriteBorderIcon/>} description="GoPro HERO6 4K Action Camera - Black"/>
                        <StorCard img={img5} title="Canon Cmera EOS 2000, Black 10x zoom" newPrice="$998.00"  rate="7.5" dot={<FiberManualRecordIcon/>} star={<StarIcon/>} order="154 orders" react={<FavoriteBorderIcon/>} description="GoPro HERO6 4K Action Camera - Black"/>
                    </StorPageRight>
                </StorPageContainer>
            </Container>
            <NinthFloor/>
            <TopFooter/>
            <BottomFooter/>
        </StorPageWrapper>
    );
}

export default StorPage;
