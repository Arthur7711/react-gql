import { useQuery, gql } from "@apollo/client";

export function DisplayLocations() {
  const GET_LOCATIONS = gql`
    query GetLocations {
      locations {
        id
        name
        description
        photo
      }
    }
  `;
  
  interface IData {
    locations: {
      id: number;
      name: string;
      description: string;
      photo: string;
    }[];
  }
  const { loading, error, data } = useQuery<IData>(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data?.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}
