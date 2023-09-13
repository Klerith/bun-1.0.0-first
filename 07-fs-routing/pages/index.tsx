import React from 'react';

export default function Home(props: { message: string } ) {

  return (
    <h1>
      Home: { props.message }
    </h1>
  )

}