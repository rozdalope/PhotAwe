import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Banner from './Banner/Banner';
import Hero from './Hero/Hero';
import Photo from "./Photo/Photo";
import RecentlyUploaded from './RecentlyUploaded/RecentlyUploaded';


const GalleryPage = () => {

    return (
        <>
            <Header />
            <Hero />
            <Photo />
            <Banner />
            <RecentlyUploaded />
            <Footer />
        </>
    )
}

export default GalleryPage;