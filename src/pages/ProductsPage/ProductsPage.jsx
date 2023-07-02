
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StarIcon from '@mui/icons-material/Star';
import fiveStars from "../../assets/images/fiveStars-7ce6f784.svg";
import fourStars from "../../assets/images/fourStars-cde14527.svg";
import { default as img2, default as img6 } from "../../assets/images/image-22.png";
import img3 from "../../assets/images/image-23.png";
import img7 from "../../assets/images/image-34.png";
import { default as img1, default as img9 } from "../../assets/images/imgstore1.png";
import img4 from "../../assets/images/imgstore3.png";
import img8 from "../../assets/images/imgstore4.png";
import img5 from "../../assets/images/imgstore5.png";
import threeStars from "../../assets/images/threeStars-5af2cfc3.svg";
import twoStars from "../../assets/images/twoStars-7ff3ca46.svg";
import BottomFooter from '../../components/BottomFooter/BottomFooter';
import BottomHeader from '../../components/BottomHeader/BottomHeader';
import DiscountCard from '../../components/DiscountCard/DiscountCard';
import Menu from '../../components/Menu/Menu';
import NinthFloor from '../../components/NinthFloor/NinthFloor';
import TopFooter from '../../components/TopFooter/TopFooter';
import TopHeader from '../../components/TopHeader/TopHeader';
import { Container } from '../../global/components';
import { ProductsPageContainer, ProductsPageLeft, ProductsPageRight, ProductsPageRoute, ProductsPageRoutes, ProductsPageWrapper } from './Style';
const ProductsPage = () => {
    return (
        <ProductsPageWrapper>
            <TopHeader/>
            <BottomHeader/>
            <Container>
                <ProductsPageRoutes>
                    <ProductsPageRoute>Home <KeyboardArrowRightIcon/></ProductsPageRoute>
                    <ProductsPageRoute>Clothings <KeyboardArrowRightIcon/></ProductsPageRoute>
                    <ProductsPageRoute>Men’s wear <KeyboardArrowRightIcon/></ProductsPageRoute>
                    <ProductsPageRoute>Summer clothing</ProductsPageRoute>
                </ProductsPageRoutes>
                <ProductsPageContainer>
                    <ProductsPageLeft>
                        <Menu title="Brands" id="A1" type='' name="" items={["Mobile accessory","Electronics","Smartphones","Modern tech"]} isSeeAll={true}/>
                        <Menu title="Category" id="A2"  type='checkbox' name="" items={["Samsung","Apple","Huawei","Pocco","Lenovo"]} isSeeAll={true}/>
                        <Menu title="Features" id="A3" type='checkbox' name="" items={["Metallic","Plastic cover","8GB Ram","Super power","Large Memory"]} isSeeAll={true}/>
                        <Menu title="Condition" id="A4"   type='radio' name="radio1" items={["Any","Refurbished","Brand new","Old items"]} isSeeAll={true}/>
                        <Menu title="Ratings" id="A5"  type='checkbox' name="" items={[<img src={fiveStars} alt=""/>,<img src={fourStars} alt=""/>,<img src={threeStars} alt=""/>,<img src={twoStars} alt=""/>]} isSeeAll={false}/>
                    </ProductsPageLeft>
                    <ProductsPageRight>
                        <DiscountCard img={img1} newPrice="$998.00" oldPrice="$1128.00" rate="7.5" star={<StarIcon/>} react={<FavoriteBorderIcon/>} description="GoPro HERO6 4K Action Camera - Black"/>
                        <DiscountCard img={img2} newPrice="$998.00" oldPrice="$1128.00" rate="7.5" star={<StarIcon/>} react={<FavoriteBorderIcon/>} description="GoPro HERO6 4K Action Camera - Black"/>
                        <DiscountCard img={img3} newPrice="$998.00" oldPrice="$1128.00" rate="7.5" star={<StarIcon/>} react={<FavoriteBorderIcon/>} description="GoPro HERO6 4K Action Camera - Black"/>
                        <DiscountCard img={img4} newPrice="$998.00" oldPrice="$1128.00" rate="7.5" star={<StarIcon/>} react={<FavoriteBorderIcon/>} description="GoPro HERO6 4K Action Camera - Black"/>
                        <DiscountCard img={img5} newPrice="$998.00" oldPrice="$1128.00" rate="7.5" star={<StarIcon/>} react={<FavoriteBorderIcon/>} description="GoPro HERO6 4K Action Camera - Black"/>
                        <DiscountCard img={img6} newPrice="$998.00" oldPrice="$1128.00" rate="7.5" star={<StarIcon/>} react={<FavoriteBorderIcon/>} description="GoPro HERO6 4K Action Camera - Black"/>
                        <DiscountCard img={img7} newPrice="$998.00" oldPrice="$1128.00" rate="7.5" star={<StarIcon/>} react={<FavoriteBorderIcon/>} description="GoPro HERO6 4K Action Camera - Black"/>
                        <DiscountCard img={img8} newPrice="$998.00" oldPrice="$1128.00" rate="7.5" star={<StarIcon/>} react={<FavoriteBorderIcon/>} description="GoPro HERO6 4K Action Camera - Black"/>
                        <DiscountCard img={img9} newPrice="$998.00" oldPrice="$1128.00" rate="7.5" star={<StarIcon/>} react={<FavoriteBorderIcon/>} description="GoPro HERO6 4K Action Camera - Black"/>
                    </ProductsPageRight>
                </ProductsPageContainer>
            </Container>
            <NinthFloor/>
            <TopFooter/>
            <BottomFooter/>
        </ProductsPageWrapper>
    );
}

export default ProductsPage;
