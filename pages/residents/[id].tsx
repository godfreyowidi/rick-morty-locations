import ResidentsList from "../../components/ResidentsList";
import { GetServerSideProps } from 'next';

export default function Residents() {
  return <ResidentsList />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
}