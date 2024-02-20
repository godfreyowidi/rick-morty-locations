import LocationsList from "../components/LocationsList";
import { GetServerSideProps } from 'next';

const Home: React.FC = () => {
  return (
    <>
      <LocationsList />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
}

export default Home;