import { useQuery, gql } from "@apollo/client";

export function DisplayLocations() {
  const GET_LOCATIONS = gql`
    query getAll {
      pokemons(first: 15) {
        id
        name
        fleeRate
      }
    }
  `;

  interface IPokemons {
    pokemons: {
      id: number;
      name: string;
      fleeRate: number;
    }[];
  }

  const { loading, error, data } = useQuery<IPokemons>(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return data?.pokemons.map(({ id, name, fleeRate }) => (
    <div key={id}>
      <p>
        {name} {fleeRate}
      </p>
    </div>
  ));
}
