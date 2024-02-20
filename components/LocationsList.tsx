import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useGetLocations, Info } from '../locations/useGetLocations';
import LocationsItem from './LocationItem';
import Pagination from "./Pagination";
import Loading from "./Loading";


const LocationsList: React.FC = () => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [info, setInfo] = useState<Info | null>(null);
  const routeChecked = useRef<boolean>(false);
  const {
    data: locations,
    loading,
    getData: getLocations,
  } = useGetLocations({
    page: currentPage,
  });

  useEffect(() => {
    console.log('Locations data:', locations);
    console.log('Is loading:', loading);
    if (routeChecked.current) {
      getLocations();
    }

    if (currentPage > 1 && locations?.info?.pages === null) {
      router.replace('/');
    }

    if (locations?.info) {
      setInfo(locations.info);
    }
  }, [locations, loading, routeChecked, getLocations, currentPage, router]);

  useEffect(() => {
    const pageParam = router.query.page;
    if (pageParam && !Array.isArray(pageParam)) {
      const queryPage = parseInt(pageParam, 10);

      if (!isNaN(queryPage) && queryPage > 0) {
        setCurrentPage(queryPage);
        routeChecked.current = true;
      } else {
        router.replace('/');
      }
    }
  }, [router.query.page, router]);

  const mainContainer = classNames(
    'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 px-1',
    'w-full sm:w-[640px] lg:w-[840px] xl:w-[940px]'
  );

  const mainTable = classNames(
    'bg-slate-600/60 border-white/20 border-2 border-solid rounded-xl shadow-sm',
    'w-full border-collapse'
  );

  const handlePaginationClick = (page: number) => {
    setCurrentPage(page);
    router.push('/page=' + page);
  };

  return (
    <div className={mainContainer}>
      <div className="text-white text-2xl pb-1">Locations</div>
      <div className={mainTable}>
        <table className="w-full">
          <thead className="table w-full">
            <tr className="bg-green-700 text-left">
              <th>Name</th>
              <th>Type</th>
              <th>Dimension</th>
              <th>Residents Count</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="relative block h-[350px] max-h-full overflow-y-scroll">
            {!loading &&
              locations?.results?.map((location) => (
                <LocationsItem key={'location_' + location.id} location={location} />
              ))}
          </tbody>
        </table>
        {loading && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Loading />
          </div>
        )}
      </div>
      {info && (
        <Pagination
          info={info}
          currentPage={currentPage}
          onClick={handlePaginationClick}
        />
      )}
    </div>
  );
};

export default LocationsList;