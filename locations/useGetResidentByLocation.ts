import { gql, useQuery } from "@apollo/client";
import { Location } from "./useGetLocations"; // Assuming this is the correct path

const GET_RESIDENTS_BY_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      residents {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
          created
        }
        location {
          id
          name
          type
          dimension
          created
        }
        image
        created
      }
    }
  }
`;

interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  created: string;
}

interface ResidentsByLocationQueryVars {
  id: string;
}

interface ResidentsByLocationResponse {
  location: {
    residents: Character[];
  };
}

interface UseGetResidentsByLocationProps {
  id: string;
}

interface UseGetResidentsByLocationReturn {
  data?: Character[];
  loading: boolean;
}

export const useGetResidentsByLocation = ({
  id,
}: UseGetResidentsByLocationProps): UseGetResidentsByLocationReturn => {
  const { data, loading } = useQuery<ResidentsByLocationResponse, ResidentsByLocationQueryVars>(
    GET_RESIDENTS_BY_LOCATION,
    {
      variables: {
        id,
      },
    }
  );

  return { data: data?.location?.residents, loading };
};