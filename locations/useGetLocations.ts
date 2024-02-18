import { gql, useLazyQuery } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
        }
        created
      }
    }
  }
`;

interface Info {
  count: number;
  pages: number;
  next?: number | null;
  prev?: number | null;
}

interface FilterLocation {
  name?: string;
  type?: string;
  dimension?: string;
}

interface Resident {
  id: string;
}

export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Resident[];
  created: string;
}

interface Locations {
  info: Info;
  results: Location[];
}

interface LocationsQueryVars {
  page?: number;
  filter?: FilterLocation;
}

interface LocationsResponse {
  locations: Locations;
}

interface UseGetLocationsProps {
  page?: number;
  filter?: FilterLocation;
}

interface UseGetLocationsReturn {
  data?: Locations;
  loading: boolean;
  getData: () => void;
}

export const useGetLocations = ({
  page,
  filter,
}: UseGetLocationsProps): UseGetLocationsReturn => {
  const [getData, { data, loading }] = useLazyQuery<LocationsResponse, LocationsQueryVars>(GET_LOCATIONS, {
    variables: {
      page,
      filter,
    },
  });

  return { data: data?.locations, loading, getData };
};